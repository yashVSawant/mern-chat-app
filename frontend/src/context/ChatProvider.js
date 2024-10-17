import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export function useChatContext() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const navigate = useNavigate();
  const isToken = localStorage.getItem("userToken") ? true : false;
  if (!localStorage.getItem("userInfo"))
    localStorage.setItem("userInfo", "{name:'',email:''}");
  let getUser = JSON.parse(localStorage.getItem("userInfo"));
  const [token, setToken] = useState(localStorage.getItem("userToken") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(isToken);
  const [user, setUser] = useState(getUser);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const login = (getToken, user) => {
    const bearerToken = `Bearer ${getToken}`;
    localStorage.setItem("userToken", bearerToken);
    localStorage.setItem("userInfo", JSON.stringify(user));
    setToken(bearerToken);
    setUser(user);
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = () => {
    setToken("");
    setIsAuthenticated(false);
    setUser({ name: "", email: "" });
  };

  const value = {
    isAuthenticated,
    token,
    user,
    login,
    logout,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
