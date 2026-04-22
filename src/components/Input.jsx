import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";
import { arrayUnion, doc, setDoc, getDoc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../firebase";
import "../stylesheets/Input.css";

const EMOJI_LIST = ["😀","😂","😍","🥺","😎","🤔","😭","🔥","❤️","👍","🙏","✨","🎉","💯","😅","🤣","😊","😇","😏","🥳"];

const Input = () => {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const emojiRef = useRef();
  const inputRef = useRef();

  // Close emoji panel on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (emojiRef.current && !emojiRef.current.contains(e.target)) setShowEmoji(false);
    };
    if (showEmoji) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showEmoji]);

  const handleSend = async () => {
    if (!text.trim() || !data.user) return;
    const msgText = text.trim();
    setText("");
    setShowEmoji(false);

    try {
      const combinedId = currentUser.uid > data.user.uid
        ? currentUser.uid + data.user.uid
        : data.user.uid + currentUser.uid;

      const chatRef = doc(db, "chats", combinedId);
      const chatDoc = await getDoc(chatRef);
      const newMsg = { id: uuid(), text: msgText, senderId: currentUser.uid, date: Timestamp.now() };

      if (chatDoc.exists()) {
        await updateDoc(chatRef, { messages: arrayUnion(newMsg) });
      } else {
        await setDoc(chatRef, { messages: [newMsg] });
        await setDoc(doc(db, "userChats", currentUser.uid), {}, { merge: true });
        await setDoc(doc(db, "userChats", data.user.uid), {}, { merge: true });
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".lastMessage"]: { text: msgText },
        [combinedId + ".date"]: serverTimestamp(),
        [combinedId + ".userInfo"]: { uid: data.user.uid, displayName: data.user.displayName || "Unknown" },
      });
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [combinedId + ".lastMessage"]: { text: msgText },
        [combinedId + ".date"]: serverTimestamp(),
        [combinedId + ".userInfo"]: { uid: currentUser.uid, displayName: currentUser.displayName || "Unknown" },
      });
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && text.trim()) {
      e.preventDefault();
      handleSend();
    }
  };

  const addEmoji = (emoji) => {
    setText((prev) => prev + emoji);
    inputRef.current?.focus();
  };

  return (
    <div style={{ position: 'relative', zIndex: 10 }}>
      <div className="input">
        <div className="input-field-wrap" ref={emojiRef}>
          {showEmoji && (
            <div className="emoji-panel">
              {EMOJI_LIST.map((e) => (
                <button key={e} onClick={() => addEmoji(e)}>{e}</button>
              ))}
            </div>
          )}
          <button className="emoji-btn" onClick={() => setShowEmoji((p) => !p)} type="button">
            😊
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="send-btn" onClick={handleSend} disabled={!text.trim()} type="button">
          ➤
        </button>
      </div>
    </div>
  );
};

export default Input;