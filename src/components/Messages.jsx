import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { db } from "../firebase";
import Message from "./Message";
import "../stylesheets/Messages.css";

const formatDateDivider = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (!data.chatId || data.chatId === "null") return;
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) setMessages(doc.data().messages || []);
    });
    return () => unSub();
  }, [data.chatId]);

  // Build message list with date dividers
  const renderMessages = () => {
    const elements = [];
    let lastDateStr = null;

    messages.forEach((m) => {
      const dateStr = formatDateDivider(m.date);
      if (dateStr !== lastDateStr) {
        lastDateStr = dateStr;
        elements.push(
          <div className="date-divider" key={`divider-${m.id}`}>
            <span>{dateStr}</span>
          </div>
        );
      }
      elements.push(<Message message={m} key={m.id} />);
    });

    return elements;
  };

  return (
    <div className="messages">
      {messages.length === 0 ? (
        <div className="no-messages">
          <span className="no-msg-icon">👋</span>
          <p>No messages yet. Say hello!</p>
        </div>
      ) : (
        renderMessages()
      )}
    </div>
  );
};

export default Messages;