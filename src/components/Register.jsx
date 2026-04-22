import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import "../stylesheets/Logincss.css";

const googleAuthProvider = new GoogleAuthProvider();

export function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupWithGoogle = async () => {
    setErr(false);
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        status: "online",
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
    setErr(false);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      await setDoc(doc(db, "users", user.uid), { displayName, email, status: "online" });
      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error.message);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo-icon">💬</div>
          <span className="auth-logo-text">OpenChat</span>
        </div>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-subtitle">Join OpenChat and start connecting with people</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label className="auth-label">Display Name</label>
            <input required type="text" placeholder="Your name" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <label className="auth-label">Email address</label>
            <input required type="email" placeholder="you@example.com" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <label className="auth-label">Password</label>
            <input required type="password" placeholder="Min. 6 characters" className="auth-input" />
          </div>

          {err && <div className="auth-error">Something went wrong. Please try again.</div>}

          <button className="auth-btn" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <div className="auth-divider"><span>or</span></div>

          <button type="button" className="auth-google-btn" onClick={signupWithGoogle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.205c0-.638-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </form>

        <p className="auth-link-text" style={{ marginTop: 16 }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}