import React, { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [getData, setGetData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectCategory, setSelectCategory] = useState("income");
  const [selectData, setSelectData] = useState("data");

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

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
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return (
    <UserContext.Provider
      value={{
        getData,
        setGetData,
        showAddModal,
        setShowAddModal,
        selectCategory,
        setSelectCategory,
        selectData,
        setSelectData,
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
