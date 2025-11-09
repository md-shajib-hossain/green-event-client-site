import React, { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";
//
const googleProvider = new GoogleAuthProvider();

//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   google sign in
  const createUserWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  //   email and password sign in
  //   const creteUSerWithEP = () => {

  //   };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
