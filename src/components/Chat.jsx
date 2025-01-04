import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../contexts/ChatContext";
import "../stylesheets/Chat.css";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const toggle=()=>{
    console.log("toggle button clicked");
  }
  return (
    <div className="chat">
      <div className="chatInfo">
      <button className="backButton" onClick={toggle}>←</button>
        <span>{data.user?.displayName || "Select a user to chat"}</span>
        <span style={{color:"green",fontSize:"1rem"}}>{data.user?.status ||""}</span>
      </div>
      {data.chatId !== "null" ? (
        <>
          <Messages />
          <Input />
        </>
      ) : (
        <p style={{ padding: "20px" }}>No user selected.</p>
      )}
    </div>
  );
};

export default Chat;