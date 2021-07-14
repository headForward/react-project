import React, { Component } from "react";
import { Switch, NavBar } from "antd-mobile";
import { MoreUIWrap, NavBarWrap } from "./StyledMore";
import { connect } from "react-redux";
import { changeSwitch } from "../actionCreator";
const mapSateProps = (state) => {
  console.log("state", state);
  return state.more;
};
const mapDispatchProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    setChecked() {
      dispatch(changeSwitch());
    },
  };
};
@connect(mapSateProps, mapDispatchProps)
class MoreUI extends Component {
  handleChange = () => {
    this.props.setChecked();
    localStorage.setItem("checked", !this.props.MapChecked);
  };
  render() {
    return (
      <NavBarWrap>
        <NavBar mode="dark">更多</NavBar>
        <MoreUIWrap>
          <span>显示地图：</span>
          <Switch
            checked={this.props.MapChecked}
            onChange={this.handleChange}
          ></Switch>
        </MoreUIWrap>
      </NavBarWrap>
    );
  }
  componentDidMount() {
    console.log("this", this);
  }
}

export default MoreUI;
