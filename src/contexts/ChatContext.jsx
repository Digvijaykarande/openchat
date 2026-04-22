import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: null,
    isAiChat: false, // Track AI chat state
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          ...state,
          isAiChat: false, // Reset AI chat when selecting a user
          user: action.payload,
          chatId:
            action.payload && currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload?.uid + currentUser.uid,
        };

      case "TOGGLE_AI_CHAT":
        return {
          ...state,
          isAiChat: true,
          user: null, // Reset user when AI chat is selected
          chatId: "ai_chat", // Dummy chatId for AI
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
