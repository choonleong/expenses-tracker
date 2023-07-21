import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Components from "../../components";
import "./Login.css";
import "@lottiefiles/lottie-player";
import { UserContext } from "../../context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signInUser, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("user/signIn", values);
      setLoading(false);

      //context sign in
      signInUser({ data });

      message.success(`Hi ${data.name}, welcome back!`);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      message.error("Please check your login details");
    }
  };

  useEffect(() => {
    console.log(isLoggedIn);

    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login">
      {loading && <Components.LoadSpinner />}
      <div className="wrapper">
        <div className="wrapper-form">
          <Form layout="vertical" onFinish={submitHandler}>
            <h1>Login</h1>
            <Form.Item label="Email" name="email">
              <Input placeholder="Please input your email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Please input your password" type="password" />
            </Form.Item>

            <div className="register-submit">
              <h4>
                Don't have an account? <br></br> Click Here To <span></span>
                <Link to="/registration">Register</Link>
              </h4>
              <button className="secondary" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
        <div className="wrapper-lottie">
          <div className="lottie">
            <lottie-player
              src="https://lottie.host/057351a4-d4eb-4603-bb3d-785745cdf783/Ci3Mh1tFaD.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
