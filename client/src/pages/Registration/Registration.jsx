import React from "react";
import Input from "antd/lib/input/Input";
import { Form } from "antd";
import { Link } from "react-router-dom";
import "./Registration.css";
import "@lottiefiles/lottie-player";

const Registration = () => {
  return (
    <div className="registration">
      {/* {loading && <Spinner />} */}
      <div className="wrapper">
        <div className="wrapper-lottie">
          <div className="lottie">
            <lottie-player
              src="https://lottie.host/796e8af4-d9dd-43b3-b692-d7c344e919ac/UGCQhy8BcH.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="wrapper-form">
          <Form layout="vertical">
            <h1>Account Registration</h1>

            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="register-submit">
              <h4>
                Already Registered? <br></br> Click Here To <span></span>
                <Link to="/">Login</Link>
              </h4>
              <button className="secondary" type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
