import react from "react";
import { Carousel } from "antd-mobile";
import { SwiperWrap } from "./StyledCookBook";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
@withRouter
class Swiper extends react.Component {
  state = {
    data: [],
    imgHeight: 176,
  };
  handleClick = (val) => {
    return () => {
      console.log("val", val);
      console.log("this", this);
      let { history } = this.props;
      history.push("/detail", { obj: val });
    };
  };
  render() {
    console.log("SwoperProps", this.props);
    return (
      <SwiperWrap>
        <Carousel autoplay={true} infinite>
          {this.props.list.map((val) => (
            <img
              src={`${val.img}`}
              alt=""
              onClick={this.handleClick(val)}
              key={val.id}
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
            //   </a>
          ))}
        </Carousel>
      </SwiperWrap>
    );
  }
}

Swiper.propTypes = {
  list: propTypes.array,
};

export default Swiper;
