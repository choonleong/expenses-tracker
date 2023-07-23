import React, { createContext, useState } from "react";
import moment from "moment";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [type, setType] = useState("All");
  const [timeline, setTimeline] = useState("7");
  const [selectedRange, setSelectedRange] = useState({
    start: moment(),
    end: moment(),
  });
  const [getData, setGetData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectCategory, setSelectCategory] = useState("income");
  const [selectData, setSelectData] = useState("data");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEditItem, setSelectedEditItem] = useState([]);

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
        selectedEditItem,
        setSelectedEditItem,
        selectData,
        setSelectData,
        showEditModal,
        setShowEditModal,
        selectedRange,
        setSelectedRange,
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
