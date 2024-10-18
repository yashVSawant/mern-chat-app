import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const isToken = localStorage.getItem("userToken") ? true : false;
  const [token, setToken] = useState(localStorage.getItem("userToken") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(isToken);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const login = (getToken) => {
    const bearerToken = `Bearer ${getToken}`;
    localStorage.setItem("userToken", bearerToken);
    setToken(bearerToken);
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setToken("");
    setIsAuthenticated(false);
    navigate("/");
  };

  const value = {
    isAuthenticated,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
