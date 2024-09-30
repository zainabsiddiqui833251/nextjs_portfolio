import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  replyTo?: string | null;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesArr = snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        replyTo: doc.data().replyTo || null,
      })) as Message[];

      // Sort messages by timestamp
      messagesArr.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
      
      setMessages(messagesArr);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      timestamp: new Date(),
      replyTo: replyTo,
    });
    setNewMessage("");
    setReplyTo(null);
  };

  const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, "messages", id));
  };

  const replyToMessage = (id: string) => {
    setReplyTo(id);
    setNewMessage("");
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-container border-[#ccc] border-[1px] border-solid p-[1rem] max-w-[300px] m-auto bg-black">
      <div className="messages h-[50vh] overflow-y-scroll mb-[1rem]">
        {messages.length === 0 ? (
          <div className="default-message text-left text-[#00ffff]">
            Let&apos;s chat : )
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="message p-[0.5rem] border-black border-[1px] border-solid">
              <div className="message-text">{message.text}</div>
              <div className="message-time text-gray-400 text-[15px] mt-1">{formatTime(message.timestamp)}</div>
              <div className="reply-delbtns flex justify-between items-center m-[3%]">
                <button onClick={() => replyToMessage(message.id)} className="reply-button p-[0.5rem] bg-transparent text-[#00ffff] border-solid border-[2px] rounded-lg border-[#00ffff] block m-auto w-[30%] mr-2">Reply</button>
                <button onClick={() => deleteMessage(message.id)} className="delete-button border-solid border-[2px] border-[#00ffff] w-[30%] ml-2 p-[0.5rem] bg-transparent rounded-lg text-[#00ffff] block m-auto">Delete</button>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} /> {/* Scroll anchor */}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder={replyTo ? `Replying to message ${replyTo}` : "Type a message..."}
        className='w-[100%] p-[0.5rem] mb-[0.5rem] bg-transparent border-none text-[white] focus:border-none focus:outline-none'
      />
      <div className="send-replybtns flex justify-between items-center m-[3%]">
        <button onClick={sendMessage} className='w-[30%] mb-2 p-[0.5rem] bg-transparent text-[#00ffff] block m-auto rounded-[10px] border-solid border-[2px] border-[#00ffff]'>Send</button>
        {replyTo && <button onClick={() => setReplyTo(null)} className='w-fit mb-2 p-[0.5rem] bg-transparent text-[#00ffff] block m-auto rounded-[10px] border-solid border-[2px] border-[#00ffff]'>Cancel Reply</button>}
      </div>
    </div>
  );
};

export default Chat;
