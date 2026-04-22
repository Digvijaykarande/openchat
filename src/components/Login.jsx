import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import "../stylesheets/Logincss.css";

export function Login() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    setLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateDoc(doc(db, "users", user.uid), { status: "online" });
      navigate("/");
    } catch {
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

        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Sign in to continue your conversations</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label className="auth-label">Email address</label>
            <input required type="email" placeholder="you@example.com" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <label className="auth-label">Password</label>
            <input required type="password" placeholder="••••••••" className="auth-input" />
          </div>

          {err && <div className="auth-error">Incorrect email or password. Please try again.</div>}

          <button className="auth-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-link-text" style={{ marginTop: 20 }}>
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}