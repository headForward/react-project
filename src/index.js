import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./assets/styles/reset.css";
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);
