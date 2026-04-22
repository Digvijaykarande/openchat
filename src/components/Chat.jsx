import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { useNavigate, useLocation } from "react-router-dom";
import { ChatContext } from "../contexts/ChatContext";
import Ai from "./Ai";
import "../stylesheets/Chat.css";

const Chat = () => {
  const { data, dispatch } = useContext(ChatContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isChatRoute = location.pathname.startsWith("/chat");

  function backpage() {
    dispatch({ type: "CHANGE_USER", payload: null });
    navigate("/");
  }

  const renderHeader = () => {
    if (data.isAiChat) {
      return (
        <>
          <div className="chat-header-avatar" style={{ background: 'linear-gradient(135deg, #7c6aff, #a78bfa)', borderRadius: '10px', fontSize: '1rem' }}>🤖</div>
          <div className="chat-header-info">
            <div className="chat-header-name">OpenChat AI</div>
            <div className="chat-header-status">● Always available</div>
          </div>
        </>
      );
    }
    if (data.user) {
      return (
        <>
          <div className="chat-header-avatar">{data.user.displayName?.charAt(0).toUpperCase()}</div>
          <div className="chat-header-info">
            <div className="chat-header-name">{data.user.displayName}</div>
            <div className="chat-header-status">
              {data.user.status === 'online' ? '● Online' : 'Offline'}
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className={`chat ${isChatRoute ? "visible" : ""}`}>
      <div className="chatInfo">
        <button className="backbutton" onClick={backpage}>←</button>
        {renderHeader()}
      </div>

      {data.isAiChat ? (
        <Ai />
      ) : data.user ? (
        <>
          <Messages />
          <Input />
        </>
      ) : (
        <div className="empty-chat">
          <div className="empty-chat-icon">💬</div>
          <p>Select someone to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default Chat;