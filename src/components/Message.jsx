import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";
import "../stylesheets/Message.css"

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  //timeformat
  const timeformat=(timestamp)=>{
    const date=new Date(timestamp.seconds*1000);
    const hour=date.getHours();
    const minute=date.getMinutes();
    const day=date.getDay();
    const month=date.getMonth()+1;
    const year=date.getFullYear();

    const hour12=hour %12||12;
    const ampm=hour>=12?"AM":"PM";
    const minutes=minute<10?"0":minute+minute;
    return `${hour12}:${minutes} ${ampm}`//return the time
  }

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <span>{timeformat(message.date)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
