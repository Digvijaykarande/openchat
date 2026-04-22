import React, { useContext, useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Chats.css";

const Chats = () => {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [userChats, setUserChats] = useState({});
  const { dispatch, data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserUID = currentUser?.uid;

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs
        .map((doc) => ({ ...doc.data(), uid: doc.id }))
        .filter((u) => u.uid !== currentUserUID);
      setUsersList(users);
    });
    return () => unsubscribe();
  }, [currentUserUID]);

  useEffect(() => {
    if (!currentUserUID) return;
    const userChatsRef = doc(db, "userChats", currentUserUID);
    const unsubscribe = onSnapshot(userChatsRef, (docSnapshot) => {
      if (docSnapshot.exists()) setUserChats(docSnapshot.data());
    });
    return () => unsubscribe();
  }, [currentUserUID]);

  const handleSelectUser = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
    if (window.innerWidth <= 768) navigate(`/chat/${user.uid}`);
  };

  const handleSelectAiChat = () => {
    dispatch({ type: "TOGGLE_AI_CHAT" });
    if (window.innerWidth <= 768) navigate(`/chat/ai`);
  };

  const getLastMessage = (uid) => {
    const combinedId = currentUserUID > uid
      ? currentUserUID + uid : uid + currentUserUID;
    return userChats[combinedId]?.lastMessage?.text || "Start a conversation";
  };

  if (!currentUserUID) return <p style={{ padding: 16, color: 'var(--text-muted)', fontSize: '0.82rem' }}>Loading...</p>;

  return (
    <div className="chatsdiv">
      <p className="chats-section-label">Quick Access</p>

      {/* AI Chat */}
      <div className={`aidiv ${data.isAiChat ? 'active' : ''}`} onClick={handleSelectAiChat}>
        <div className="ai-avatar">🤖</div>
        <div className="ai-info">
          <h4>OpenChat AI</h4>
          <p>Ask me anything</p>
        </div>
        <span className="ai-badge">AI</span>
      </div>

      <p className="chats-section-label" style={{ marginTop: 8 }}>People</p>

      {usersList.map((user) => {
        const isActive = data.user?.uid === user.uid && !data.isAiChat;
        return (
          <div
            className={`userdiv ${isActive ? 'active' : ''}`}
            key={user.uid}
            onClick={() => handleSelectUser(user)}
          >
            <div className="user-avatar-wrap">
              <div className="userLatter">{user.displayName.charAt(0).toUpperCase()}</div>
              <span className={`status-dot ${user.status === 'online' ? 'online' : 'offline'}`} />
            </div>
            <div className="user-info">
              <div className="namestatus">
                <h4 className="usernameh3">{user.displayName}</h4>
                {user.status === 'online' && <span className="user-status-text">●</span>}
              </div>
              <p className="lastMessage">{getLastMessage(user.uid)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;