import React from "react";
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
            <div className="data-icons">
              <Components.DataIcons />
            </div>
          </div>
        </div>
      </Components.NavBar>
    </>
  );
};

export default Home;
