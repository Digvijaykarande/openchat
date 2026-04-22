import { useContext} from 'react'
import './App.css'
import {AuthContext}from "./contexts/AuthContext"
import { BrowserRouter, Navigate, Route,Routes } from 'react-router-dom';
import Home from "./components/Home";
import{Login}from "./components/Login";
import{Register}from "./components/Register";
import  Chat  from "./components/Chat";
import Ai from './components/Ai';


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
        <Route path="/ai" element={<Ai />} />
        <Route path="/register" element={<Register />} />
        {/* New route for mobile chat */}
        <Route path="/chat/:userId" element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
