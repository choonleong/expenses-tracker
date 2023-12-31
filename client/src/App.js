import React from "react";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Components from "./components";
import Pages from "./pages";
import { UserContextProvider } from "./context";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Pages.Login />} />
            <Route path="/registration" element={<Pages.Registration />} />
            <Route
              path="/home"
              element={
                <Components.ProtectedRoute>
                  <Pages.Home />
                </Components.ProtectedRoute>
              }
            />
            <Route path="/*" element={<Pages.NotFound />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
