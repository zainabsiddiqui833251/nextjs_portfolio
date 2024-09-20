import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesArr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(messagesArr);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      timestamp: new Date(),
      replyTo: replyTo, // Attach the replyTo ID if replying
    });
    setNewMessage("");
    setReplyTo(null); // Reset replyTo after sending
  };

  const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, "messages", id));
  };

  const replyToMessage = (id: string) => {
    setReplyTo(id); // Set the ID of the message to reply to
    setNewMessage(""); // Optionally clear the input for the reply
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
           <div className="reply-delbtns flex justify-between items-center m-[3%]">
           <button onClick={() => replyToMessage(message.id)} className="reply-button w-[30%] mr-2 text-[2vw]">Reply</button>
           <button onClick={() => deleteMessage(message.id)} className="delete-button w-[30%] ml-2 text-[2vw]">Delete</button>
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



