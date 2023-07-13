import React from "react";
import Input from "antd/es/input/Input";
import { Form } from "antd";
import "./Registration.css";
// import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

const Registration = () => {
  return (
    <div className="register">
      {/* {loading && <Spinner />} */}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical">
            <h1>REGISTER</h1>

            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <h1>Already Registered , Click Here To Login</h1>
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
