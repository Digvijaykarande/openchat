import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";
import {
  arrayUnion,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  Timestamp, // Ensure this is imported
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../firebase";
import "../stylesheets/Input.css";

const Input = () => {
  const [text, setText] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    try {
      const combinedId =
        currentUser.uid > data.user.uid
          ? currentUser.uid + data.user.uid
          : data.user.uid + currentUser.uid;

      const chatRef = doc(db, "chats", combinedId);

      const chatDoc = await getDoc(chatRef);

      if (chatDoc.exists()) {
        await updateDoc(chatRef, {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".lastMessage"]: { text },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
          [combinedId + ".lastMessage"]: { text },
          [combinedId + ".date"]: serverTimestamp(),
        });
      } else {
        await setDoc(chatRef, {
          messages: [
            {
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
            },
          ],
        });

        await setDoc(doc(db, "userChats", currentUser.uid), {}, { merge: true });
        await setDoc(doc(db, "userChats", data.user.uid), {}, { merge: true });
        
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: data.user.uid,
            displayName: data.user.displayName || "Unknown User",
            photoURL: data.user.photoURL || "https://example.com/default-avatar.png",
          },
          [combinedId + ".lastMessage"]: { text },
          [combinedId + ".date"]: serverTimestamp(),
        });
        
        await updateDoc(doc(db, "userChats", data.user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName || "Unknown User",
            photoURL: currentUser.photoURL || "https://example.com/default-avatar.png",
          },
          [combinedId + ".lastMessage"]: { text },
          [combinedId + ".date"]: serverTimestamp(),
        });
        
        
      }

      setText("");
    } catch (err) {
      console.error("Error sending message: ", err);
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button onClick={handleSend}>Send </button>
      </div>
    </div>
  );
};

export default Input;
