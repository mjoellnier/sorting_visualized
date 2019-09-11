import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./style/index.css";
import { setGlobal } from "reactn";

setGlobal({
  numbers: {}
});

ReactDOM.render(<App />, document.getElementById("root"));
