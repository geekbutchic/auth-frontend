import React from "react";
import ReactDOM from "react-dom";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import "./_base.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//STANDARD REACTS FILE SETS UP APP RENDER