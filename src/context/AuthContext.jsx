import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);

  // ✅ Load token + userName + userId from localStorage on refresh
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedName = localStorage.getItem("name");
    const savedId = localStorage.getItem("userId");

    if (savedToken) setToken(savedToken);
    if (savedName) setUserName(savedName);
    if (savedId) setUserId(Number(savedId));
  }, []);

  // ✅ Login function
  const loginAuth = (tokenValue, nameValue, idValue) => {
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("name", nameValue);
    localStorage.setItem("userId", idValue);

    setToken(tokenValue);
    setUserName(nameValue);
    setUserId(idValue);
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("userId");

    setToken(null);
    setUserName(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, userName, userId, loginAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
