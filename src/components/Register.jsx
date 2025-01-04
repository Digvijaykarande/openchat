import React, { useState } from "react";
import {createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import "../stylesheets/Registercss.css";

const googleAuthProvider = new GoogleAuthProvider();
export function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        status: "offline",
      });

      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      setErr(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      await setDoc(doc(db, "users", user.uid), { 
        displayName, 
        email,
        status: "offline",  
      });
      console.log("User registered successfully");
      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error.message);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="register-div">
        <center>
          <h1>Register</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button disabled={loading}>Signup</button>
          <button type="button" onClick={signupWithGoogle}>
            Sign up with Google
          </button>
          {loading && "Uploading, please wait..."}
          {err && <span>Something went wrong...</span>}
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
} 