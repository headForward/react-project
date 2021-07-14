import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

const animate = (WrapperdComp) => {
  return class extends Component {
    render() {
      console.log("animate", this.props);
      let { match, meta } = this.props;
      let pathname = this.props.location.pathname;
      console.log("pathname", pathname);
      //   let enterActive = "";
      //   let exitActive = "";
      //   let from = this.props.location.state && this.props.location.state.from;
      //   if (!!match) {
      //     if (from < meta) {
      //       enterActive = "animate__slideInRight";
      //       exitActive = "animate__slideOutLeft";
      //     } else {
      //       enterActive = "animate__slideOutLeft";
      //       exitActive = "animate__slideInRight";
      //     }
      //   }
      return (
        <CSSTransition
          in={!!this.props.match}
          timeout={1000}
          classNames={{
            enterActive:
              pathname === "/list"
                ? "animate__slideInRight"
                : "animate__slideOutLeft",
            enter: "animate__animated",
            exitActive:
              pathname === "/list"
                ? "animate__slideOutLeft"
                : "animate__slideInRight",
            exit: "animate__animated",
          }}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrapperdComp {...this.props}></WrapperdComp>
        </CSSTransition>
      );
    }
  };
};

export default animate;
