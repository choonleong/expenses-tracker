import React from "react";
// import { Select } from "antd";
import Components from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Components.NavBar>
        <div className="wrapper-home">
          <div className="wrapper-home-navbar">
            <div className="transactions-timeline">
              <Components.TimeLine />
            </div>
            <div className="select-ie">
              <Components.SelectIE />
            </div>
          </div>
        </div>
      </Components.NavBar>
    </>
  );
};

export default Home;
