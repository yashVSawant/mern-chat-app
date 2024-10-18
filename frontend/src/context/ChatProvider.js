import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function useChatContext() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  if (!localStorage.getItem("userInfo"))
    localStorage.setItem("userInfo", "{name:'',email:''}");
  let getUser = JSON.parse(localStorage.getItem("userInfo"));
  const [user, setUser] = useState(getUser);
  const [chat, setChat] = useState([]);

  const setNewUser = (user) => {
    localStorage.setItem("userInfo", JSON.stringify(user));
    setUser(user);
  };
  const setNewChat = () => {
    setChat();
  };

  const value = {
    user,
    chat,
    setNewUser,
    setNewChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
