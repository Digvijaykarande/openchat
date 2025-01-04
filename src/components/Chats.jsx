import React, { useContext, useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../contexts/ChatContext";
import "../stylesheets/Chats.css";

const Chats = () => {
  const [usersList, setUsersList] = useState([]);
  const [userChats, setUserChats] = useState({});
  const { dispatch } = useContext(ChatContext);

  // Replace this with dynamic UID fetching
  const currentUserUID = "currentUserUID";

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      setUsersList(users);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUserUID) {
      console.error("currentUserUID is not defined.");
      return;
    }

    const userChatsRef = doc(db, "userChats", currentUserUID);
    const unsubscribe = onSnapshot(
      userChatsRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setUserChats(data);
        } }
    );
    return () => unsubscribe();
  }, [currentUserUID]);

  const handleSelectUser = (user) => {
    console.log("Selected user:", user);
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="chatsdiv">
      {usersList.map((user) => (
        <div
          className="userdiv"
          key={user.uid}
          onClick={() => handleSelectUser(user)}>

          <h2 className="userLatter">{user.displayName.charAt(0)}</h2>

        <div className="userdiv-1">
          <div className="userdiv-2" style={{display:"flex"}}>
            <h4 className="usernameh3">{user.displayName} </h4>
            <span style={{color:"#2cb32c"}}>{user.status}</span>
            </div>
            <p className="lastMessage" style={{marginLeft:"10px"}}>
              {userChats[user.uid]?.lastMessage?.text || "No messages yet"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
