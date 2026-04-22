import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";
import "../stylesheets/Search.css";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    if (!username.trim()) return;
    setErr(false);
    setUser(null);
    const q = query(collection(db, "users"), where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) { setErr(true); return; }
      querySnapshot.forEach((doc) => setUser({ ...doc.data(), uid: doc.id }));
    } catch {
      setErr(true);
    }
  };

  const handleKey = (e) => e.code === "Enter" && handleSearch();

  const handleSelect = async () => {
    if (!user) return;
    const combinedId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: { uid: user.uid, displayName: user.displayName },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: { uid: currentUser.uid, displayName: currentUser.displayName, photoURL: currentUser.photoURL },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Find a user..."
          onKeyDown={handleKey}
          onChange={(e) => { setUsername(e.target.value); setErr(false); setUser(null); }}
          value={username}
        />
      </div>
      {err && <p className="search-error">No user found with that name</p>}
      {user && (
        <div className="search-result" onClick={handleSelect}>
          <div className="search-result-avatar">{user.displayName.charAt(0).toUpperCase()}</div>
          <div>
            <div className="search-result-name">{user.displayName}</div>
            <div className="search-result-hint">Tap to start chatting</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;