import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

// used in Header.jsx
export const AuthContext = createContext(null);

const auth = getAuth(app);

// add component to main.jsx to wrap the main app
const AuthProvider = ({ children }) => {
  const user = { displayName: "Muri Khan" };
  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
