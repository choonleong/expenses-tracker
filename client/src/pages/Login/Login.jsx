import axios from "axios";
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import Components from "../../components";
import "./Login.css";
import "@lottiefiles/lottie-player";

const Login = () => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("user/signIn", values);
      setLoading(false);
      // message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      message.success(`Hi ${data.name}, welcome back!`);
      // navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Please check your login details");
    }
  };

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
