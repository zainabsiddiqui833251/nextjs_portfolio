import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesArr = snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        replyTo: doc.data().replyTo || null,
      })) as Message[];
      setMessages(messagesArr);
    });
    return () => unsubscribe();
  }, []);

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

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
            <div className="reply-delbtns flex justify-between items-center m-[3%]">
              <button onClick={() => replyToMessage(message.id)} className="reply-button w-[30%] mr-2 text-[1vw]">Reply</button>
              <button onClick={() => deleteMessage(message.id)} className="delete-button w-[30%] ml-2 text-[1vw]">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder={replyTo ? `Replying to message ${replyTo}` : "Type a message..."}
      />
      <div className="send-replybtns flex justify-between items-center m-[3%]">
        <button onClick={sendMessage} className='w-[30%] mb-2'>Send</button>
        {replyTo && <button onClick={() => setReplyTo(null)} className='w-[30%] mt-2'>Cancel Reply</button>}
      </div>
    </div>
  );
};

export default Chat;




