import React, { useContext } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";
import "../stylesheets/Navbar.css";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", user.uid), { status: "offline" }, { merge: true });
      }
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (!currentUser?.displayName) {
    return (
      <div className="navbar">
        <div className="navbar-avatar" style={{ background: 'var(--bg-elevated)' }} />
        <div className="navbar-info">
          <div style={{ width: 80, height: 12, background: 'var(--bg-elevated)', borderRadius: 4 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar-avatar">
        {currentUser.displayName.charAt(0).toUpperCase()}
      </div>
      <div className="navbar-info">
        <div className="navbar-name">{currentUser.displayName}</div>
        <div className="navbar-status">● Active now</div>
      </div>
      <button className="signout-btn" onClick={handleSignOut} title="Sign out">
        ↪
      </button>
    </div>
  );
}

export default Navbar;