import React, { useContext } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth'; // Rename to avoid conflict
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import { AuthContext } from "../contexts/AuthContext";
import "../stylesheets/Navbar.css";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(
          doc(db, "users", user.uid),
          { status: "offline" },
          { merge: true } 
        );
      }
      await firebaseSignOut(auth);  
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className='userdiv'>
        <p>{currentUser?.displayName}</p>
        <button onClick={handleSignOut} style={{marginLeft:"10px"}}>Sign Out</button>
      </div>
    </>
  );
}

export default Navbar;
