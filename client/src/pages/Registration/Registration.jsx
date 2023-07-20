import axios from "axios";
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import Components from "../../components";
import "./Registration.css";
import "@lottiefiles/lottie-player";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/user/signUp", values);
      message.success("Registration is Successful!");
      setLoading(false);
      // navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Please check your registration details");
    }
  };

  return (
    <div className="registration">
      {loading && <Components.LoadSpinner />}
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
          <Form layout="vertical" onFinish={submitHandler}>
            <h1>Account Registration</h1>

            <Form.Item label="Name" name="name">
              <Input placeholder="Please enter your name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Please enter a valid email address" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input
                type="password"
                placeholder="Please enter a minimum of 9 characters"
              />
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
