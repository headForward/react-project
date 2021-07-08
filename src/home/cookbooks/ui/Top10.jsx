import React, { Component } from "react";
import { Top10Wrap } from "./StyledCookBook";
import propTypes from "prop-types";
class Top10 extends Component {
  render() {
    console.log("top10", this.props.list);
    return (
      <Top10Wrap>
        <h1>热门分类</h1>
        <ul>
          {this.props.list.map((val) => {
            return (
              <li>
                <div>
                  <img src={val.img} alt=""/>
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
