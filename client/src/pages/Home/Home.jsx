import React from "react";
import Components from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Components.Layout>
        <div className="wrapper-home">
          <div className="wrapper-home-navbar">
            <div className="test">
              <div className="wrapper-transaction-income">
                <div className="transactions-timeline">
                  <Components.TimeLine />
                </div>
                <div className="select-ie">
                  <Components.SelectIE />
                </div>
              </div>
              <div className="data-icons">
                <Components.DataIcons />
              </div>
            </div>
            <div className="data-table">
              <Components.DataTable />
            </div>
          </div>
        </div>
      </Components.Layout>
    </>
  );
};

export default Home;
