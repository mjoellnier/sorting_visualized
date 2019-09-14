import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./style/index.css";
import { setGlobal } from "reactn";
import LinearSearch from "./components/linearSearch";

setGlobal({
  numbers: {},
  page: <LinearSearch />
});

ReactDOM.render(<App />, document.getElementById("root"));
