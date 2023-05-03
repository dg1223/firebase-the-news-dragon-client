import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// used in Header.jsx
export const AuthContext = createContext(null);

const auth = getAuth(app);

// add component to main.jsx to wrap the main app
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  // const user = null;

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("Logged in user inside auth state observer", loggedUser);
      setUser(loggedUser);
    });
    return () => {
      unsubscibe();
    };
  }, []);

  // This information is relayed by the context API AuthContext
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
