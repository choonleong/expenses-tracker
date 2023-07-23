import React, { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [type, setType] = useState("All");
  const [timeline, setTimeline] = useState("7");
  const [getData, setGetData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectCategory, setSelectCategory] = useState("income");
  const [selectData, setSelectData] = useState("data");
  const [showEditModal, setShowEditModal] = useState(false);

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
        type,
        setType,
        timeline,
        setTimeline,
        getData,
        setGetData,
        showAddModal,
        setShowAddModal,
        selectCategory,
        setSelectCategory,
        selectData,
        setSelectData,
        showEditModal,
        setShowEditModal,
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
