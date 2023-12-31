import React from "react";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const Pages = {
  Login: (props) => {
    return <Login {...props} />;
  },
  Registration: (props) => {
    return <Registration {...props} />;
  },
  Home: (props) => {
    return <Home {...props} />;
  },
  NotFound: (props) => {
    return <NotFound {...props} />;
  },
};

export default Pages;
