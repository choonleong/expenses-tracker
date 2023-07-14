import React from "react";
import Input from "antd/lib/input/Input";
import { Form } from "antd";
import "./Login.css";
import "@lottiefiles/lottie-player";
// import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

const Login = () => {
  return (
    <div className="login">
      {/* {loading && <Spinner />} */}
      <div className="wrapper">
        <div className="wrapper-horizontal-form">
          <Form layout="vertical">
            <h1>Login</h1>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="register-submit">
              <h4>
                Not Registered Yet? <br></br> Click Here To Register
              </h4>
              <button className="secondary" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
        <div className="wrapper-horizontal-lottie">
          <div className="lottie">
            <lottie-player
              //   src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
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
