import { Children, useContext, useState } from 'react'
import './App.css'
import {AuthContext}from "./contexts/AuthContext"
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import{Home} from "./components/Home";
import{Login}from "./components/Login";
import{Register}from "./components/Register";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter basename="/openchat/">
      <Routes>
        <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;