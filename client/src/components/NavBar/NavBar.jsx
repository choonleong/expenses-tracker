import React from "react";
import "./NavBar.css";
import { Menu, Dropdown } from "antd";

const NavBar = () => {
  const menu = (
    <Menu
      items={[
        {
          label: <li>Logout</li>,
        },
      ]}
    />
  );

  return (
    <div className="wrapper-navbar">
      <div className="navbar">
        <div>
          <h1 className="title">My Expenses Tracker</h1>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className="primary">Settings</button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
