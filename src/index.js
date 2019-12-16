import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApplicationProvider } from "./components/applicationContext";

ReactDOM.render(
  <ApplicationProvider>
    <App />
  </ApplicationProvider>,
  document.getElementById("root")
);
