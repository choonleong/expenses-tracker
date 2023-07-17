import React from "react";
import NavBar from "./NavBar/NavBar";
import LoadSpinner from "./LoadSpinner/LoadSpinner";
import TimeLine from "./SelectTimeline/selectTimeline";

const Components = {
  NavBar: (props) => {
    return <NavBar {...props} />;
  },
  LoadSpinner: (props) => {
    return <LoadSpinner {...props} />;
  },
  TimeLine: (props) => {
    return <TimeLine {...props} />;
  },
};

export default Components;
