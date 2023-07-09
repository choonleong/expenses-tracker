import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Wow this is the first router</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
