import React from "react";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Login />} />
          <Route path="/registration" element={<Pages.Registration />} />
          <Route path="/home" element={<Pages.Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
