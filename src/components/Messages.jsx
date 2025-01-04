import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { db } from "../firebase";
import Message from "./Message";
import "../stylesheets/Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages || []); // Default to empty array if no messages
      }
    });

    return () => unSub();
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.length === 0 ? (
        <p>No messages yet. Start chatting!</p> // Empty state message
      ) : (
        messages.map((m) => <Message message={m} key={m.id} />)
      )}
    </div>
  );
};

export default Messages;
