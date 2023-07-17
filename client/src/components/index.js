import React from "react";
import NavBar from "./NavBar/NavBar";
import LoadSpinner from "./LoadSpinner/LoadSpinner";
import TimeLine from "./Select_Timeline/selectTimeline";
import SelectIE from "./Select_IE/select_ie";
import DataIcons from "./DataIcons/DataIcons";

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
  SelectIE: (props) => {
    return <SelectIE {...props} />;
  },
  DataIcons: (props) => {
    return <DataIcons {...props} />;
  },
};

export default Components;
