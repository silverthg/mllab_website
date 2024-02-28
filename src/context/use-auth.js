import React, { useContext, useState, useEffect } from "react";
import { addOrUpdateUser, auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  function signup(email, password, firstName, lastName, middleName) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const displayName = `${firstName} ${middleName} ${lastName}`;
        userCredential.user.updateProfile({
          displayName: displayName,
        });

        addOrUpdateUser(userCredential.user.uid, displayName, "");
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updatePhone(phone) {
    return currentUser.updatePhone(phone);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        setEmail(user.email);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    email,
    login,
    phone,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updatePhone,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
