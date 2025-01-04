import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContextProvider} from "./contexts/AuthContext.jsx"
import{ChatContextProvider} from "./contexts/ChatContext.jsx"

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <ChatContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
)
