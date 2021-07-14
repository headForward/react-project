import React, { Component } from "react";
import { Top10Wrap } from "./StyledCookBook";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
@withRouter
class Top10 extends Component {
  handleClick = (val) => {
    return () => {
      console.log("val", val.name);
      let { history } = this.props;
      history.push("/detail", { obj: val });
    };
  };
  render() {
    console.log("top10", this.props.list);
    return (
      <Top10Wrap>
        <h1>热门分类</h1>
        <ul>
          {this.props.list.map((val) => {
            return (
              <li onClick={this.handleClick(val)}>
                <div>
                  <img src={val.img} alt="" />
                </div>
                <div>
                  <p>{val.name}</p>
                  <p>
                    <span>{val.all_click}</span>次浏览,
                    <span>{val.favorites}</span>次收藏
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Top10Wrap>
    );
  }
}

Top10.propTypes = {
  list: propTypes.array,
};

export default Top10;
