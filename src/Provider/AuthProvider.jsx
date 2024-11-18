import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  // Login With Google
  const googleProvider = new GoogleAuthProvider();
  const handleSigninGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login with Twitter
  const twitterProvider = new TwitterAuthProvider();
  const handleSigninTwitter = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  const info = {
    user,
    setUser,
    errorMessage,
    setErrorMessage,
    loading,
    setLoading,
    handleSigninGoogle,
    handleSigninTwitter,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
