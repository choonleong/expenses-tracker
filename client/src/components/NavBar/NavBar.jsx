import React from "react";
import "./NavBar.css";
import { Menu, Dropdown } from "antd";

const NavBar = (props) => {
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
          <Dropdown overlay={menu}>
            <button className="primary">Settings</button>
          </Dropdown>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default NavBar;
