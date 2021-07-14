import React from "react";
import Home from "./home/Home";
import List from "./list/List";
import Detail from "./detail/Detail";
import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
  return (
    <div style={{ backgroundColor: "#efefef", height: "100%" }}>
      <>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </>
    </div>
  );
};

export default App;
