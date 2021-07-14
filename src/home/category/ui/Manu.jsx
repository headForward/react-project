import React, { Component } from "react";
import { MenuWrap } from "./StyledCategory";
import { getCategory } from "../../../utils/http";
import memoize from "memoize-one"; //类似计算属性
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

@withRouter
@connect((state) => {
  console.log("state", state);
  return state.category;
}, null)
class Manu extends Component {
  state = {
    cate: "",
    curCate: "热门",
    index: 0,
  };

  getCurCate = memoize((cateTopTabType, index) => {
    this.setState({
      curCate: Object.keys(this.state.cate[cateTopTabType])[index],
    });
    return Object.keys(this.state.cate[cateTopTabType])[index];
  });

  handleClick = (index) => {
    return (e) => {
      this.setState({
        curCate: e.target.innerText,
        index: index,
      });
    };
  };
  handleClick1 = (val) => {
    return () => {
      console.log("val", this);
      let { history } = this.props;
      history.push("/list", { title: val });
    };
  };
  render() {
    return (
      <MenuWrap>
        <aside>
          <ul>
            {this.state.cate &&
              Object.keys(this.state.cate[this.props.cateTopTabType]).map(
                (val, index) => {
                  return (
                    <li
                      key={index}
                      className={this.state.curCate === val ? "active" : ""}
                      onClick={this.handleClick(index)}
                    >
                      <span>{val}</span>
                    </li>
                  );
                }
              )}
          </ul>
        </aside>
        <section>
          <ul>
            {this.state.cate &&
              this.state.cate[this.props.cateTopTabType][
                this.getCurCate(this.props.cateTopTabType, this.state.index)
              ].map((val) => {
                return (
                  <li key={val} onClick={this.handleClick1(val)}>
                    {val}
                  </li>
                );
              })}
          </ul>
        </section>
      </MenuWrap>
    );
  }
  componentDidMount() {
    console.log("this", this);
    getCategory({ url: "api/category" }).then((data) => {
      console.log("data", data.data);
      this.setState({
        cate: data.data.data,
      });
    });
  }
}

export default Manu;
