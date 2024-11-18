import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const myName = "Rahat";
  return <AuthContext.Provider value={myName}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
