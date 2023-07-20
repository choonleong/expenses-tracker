import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Menu, Dropdown } from "antd";
import { message } from "antd";

const NavBar = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  //logout function
  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/");
  };

  const menu = (
    <Menu
      items={[
        {
          label: <li onClick={logoutHandler}>Logout</li>,
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
