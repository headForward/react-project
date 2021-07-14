import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./assets/styles/reset.css";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
  document.querySelector("#root")
);
