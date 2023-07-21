import React from "react";
import Layout from "./Layout/Layout";
import LoadSpinner from "./LoadSpinner/LoadSpinner";
import TimeLine from "./Select_Timeline/selectTimeline";
import SelectIE from "./Select_IE/select_ie";
import DataIcons from "./DataIcons/DataIcons";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

const Components = {
  Layout: (props) => {
    return <Layout {...props} />;
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
  ProtectedRoute: (props) => {
    return <ProtectedRoute {...props} />;
  },
};

export default Components;
