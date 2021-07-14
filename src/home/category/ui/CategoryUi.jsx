import { StyledCategoryUi } from "./StyledCategory";
import react from "react";

import Search from "@c/search/Search.jsx";
import Manu from "./Manu";
import { connect } from "react-redux";

@connect(null, (dispatch) => ({
  setCategory() {
    dispatch({ type: "classify" });
  },
  setMaterial() {
    dispatch({ type: "ingredient" });
  },
}))
class CategoryUi extends react.Component {
  state = {
    number: 1,
  };
  firstLiClick = (num) => {
    return () => {
      this.setState({
        number: num,
      });
      if (num === 1) {
        this.props.setCategory();
      } else {
        this.props.setMaterial();
      }
    };
  };
  render() {
    return (
      <StyledCategoryUi>
        <nav>
          <ul>
            <li
              onClick={this.firstLiClick(1)}
              className={this.state.number === 1 ? "active" : ""}
            >
              分类
            </li>
            <li
              onClick={this.firstLiClick(2)}
              className={this.state.number === 2 ? "active" : ""}
            >
              食材
            </li>
            <li
              className={this.state.number === 1 ? "slide" : "slide right"}
            ></li>
          </ul>
        </nav>
        <Search outBg="#fff" innerBg="#efefef" hasBorder={false}></Search>
        <Manu></Manu>
      </StyledCategoryUi>
    );
  }
}

export default CategoryUi;
