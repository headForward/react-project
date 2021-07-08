import react from "react";
import { Carousel } from "antd-mobile";
import { SwiperWrap } from "./StyledCookBook";
import propTypes from "prop-types";

class Swiper extends react.Component {
  state = {
    data: [],
    imgHeight: 176,
  };
  render() {
    console.log("SwoperProps", this.props);
    return (
      <SwiperWrap>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={(index) => console.log("slide to", index)}
        >
          {this.props.list.map((val) => (
            <img
              src={`${val.img}`}
              alt=""
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
