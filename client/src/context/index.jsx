import React, { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState();

  const signOutUser = () => {
    localStorage.removeItem("user");
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const signInUser = ({ data }) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ ...data.user, password: "" })
    );
    setCurrentUser({ ...data.user });
    setIsLoggedIn({ ...data.userType });
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        setCurrentUser,
        setIsLoggedIn,
        signInUser,
        signOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
