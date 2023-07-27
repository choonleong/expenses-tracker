import React, { useContext } from "react";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "./Layout.css";
import { Menu, Dropdown } from "antd";
import { message } from "antd";

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { signOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  //logout function
  const logoutHandler = () => {
    signOutUser();
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
        <div className="title-container">
          <h1 className="title">My Expenses Tracker</h1>
        </div>
        <div className="dropdown-button">
          <Dropdown overlay={menu}>
            <button className="settings-button">Settings</button>
          </Dropdown>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
