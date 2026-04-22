import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../contexts/ChatContext";
import "../stylesheets/Message.css";

const EMOJI_LIST = ["❤️", "😂", "😮", "😢", "👍", "🔥"];

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef();

  const isOwner = message.senderId === currentUser.uid;

  const timeFormat = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const hour12 = hour % 12 || 12;
    const ampm = hour >= 12 ? "PM" : "AM";
    const minutes = minute < 10 ? "0" + minute : minute;
    return `${hour12}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    if (showPicker) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showPicker]);

  const handleReact = async (emoji) => {
    setShowPicker(false);
    try {
      const chatRef = doc(db, "chats", data.chatId);
      const chatDoc = await getDoc(chatRef);
      if (!chatDoc.exists()) return;

      const messages = chatDoc.data().messages || [];
      const updatedMessages = messages.map((m) => {
        if (m.id !== message.id) return m;
        const reactions = m.reactions || {};
        const users = reactions[emoji] || [];
        const alreadyReacted = users.includes(currentUser.uid);
        return {
          ...m,
          reactions: {
            ...reactions,
            [emoji]: alreadyReacted
              ? users.filter((uid) => uid !== currentUser.uid)
              : [...users, currentUser.uid],
          },
        };
      });

      await updateDoc(chatRef, { messages: updatedMessages });
    } catch (err) {
      console.error("Reaction error:", err);
    }
  };

  const reactions = message.reactions || {};
  const reactionEntries = Object.entries(reactions).filter(([, users]) => users.length > 0);

  return (
    <div ref={ref} className={`message ${isOwner ? "owner" : ""}`}>
      <div className="message-wrap">
        {/* Emoji trigger button */}
        <button className="emoji-trigger" onClick={() => setShowPicker((p) => !p)}>
          😊
        </button>

        {/* Reaction picker */}
        {showPicker && (
          <div className="reaction-picker" ref={pickerRef}>
            {EMOJI_LIST.map((emoji) => (
              <button key={emoji} onClick={() => handleReact(emoji)}>{emoji}</button>
            ))}
          </div>
        )}

        <div className="messageContent">
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>

      {/* Reactions row */}
      {reactionEntries.length > 0 && (
        <div className="message-reactions">
          {reactionEntries.map(([emoji, users]) => (
            <button key={emoji} className="reaction-badge" onClick={() => handleReact(emoji)}>
              {emoji}
              <span>{users.length}</span>
            </button>
          ))}
        </div>
      )}

      <div className="messageInfo">
        <span className="msg-time">{timeFormat(message.date)}</span>
        {isOwner && <span style={{ fontSize: '0.65rem', color: 'var(--accent-bright)' }}>✓✓</span>}
      </div>
    </div>
  );
};

export default Message;