import React from "react";
import NavBar from "./NavBar/NavBar";
import LoadSpinner from "./LoadSpinner/LoadSpinner";

const Components = {
  NavBar: (props) => {
    return <NavBar {...props} />;
  },
  LoadSpinner: (props) => {
    return <LoadSpinner {...props} />;
  },
};

export default Components;
