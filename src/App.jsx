import React from "react";
import Home from "./home/Home";
import List from "./list/List";
import Detail from "./detail/Detail";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
const App = () => {
  return (
    <div style={{ backgroundColor: "#efefef", height: "100%" }}>
      <>
        <Route
          path="/home"
          children={(props) => <Home {...props} meta={1}></Home>}
        ></Route>
        <Route
          path="/list"
          children={(props) => <List {...props} meta={2}></List>}
        ></Route>
        <Route
          path="/detail"
          children={(props) => <Detail {...props} meta={3}></Detail>}
        ></Route>
        <Redirect from="/" to="/home"></Redirect>
      </>
    </div>
  );
};

export default App;
