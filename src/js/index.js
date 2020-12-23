import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/index.scss";

import "jquery";
import "popper.js";
import "bootstrap";

import Layout from "./layout";

ReactDOM.render(<Layout />, document.querySelector("#app"));
