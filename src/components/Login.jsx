import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import "../stylesheets/Logincss.css"

export function Login() {
  const [err, setErr] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Update user status to "online" after login
      const user = auth.currentUser;
      await updateDoc(doc(db, "users", user.uid), {
        status: "online",
      });

      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <center><h1>Login</h1></center>
      <form onSubmit={handleSubmit} style={{width:"340px",height:"34vh"}}>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button disabled={loading}>Login</button>
        {loading && "Uploading, please wait..."}
        {err && <span>Something went wrong...</span>}
        <p>
          Have an account? <Link to="/register">register</Link>
        </p>
      </form>
    </>
  );
}
