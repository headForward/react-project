import react from "react";
import { NavBar, Icon, Button } from "antd-mobile";
import { DetailWrap } from "./StyledDetail";
import animate from "../hoc/animate";
@animate
class Detail extends react.Component {
  onLeftClick = () => {
    console.log(this);
    let { history } = this.props;
    history.goBack();
  };
  render() {
    console.log("this", this);
    return (
      <div>
        <NavBar
          onLeftClick={this.onLeftClick}
          icon={<Icon type="left" />}
          mode="dark"
          style={{ backgroundColor: " #ee742f" }}
        >
          {this.props.location.state&&this.props.location.state.obj.name}
        </NavBar>
        <DetailWrap>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fy0.ifengimg.com%2Fnews_spider%2Fdci_2012%2F04%2F887b797d0dcbec6c5014b5eacb57be79.jpg&refer=http%3A%2F%2Fy0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628233226&t=318c3019d0346b5bcb13605f72985b78"
            alt=""
            style={{ width: "100%" }}
          />
          <h1>红烧鱼</h1>
          <h2>4272674浏览/7571收藏</h2>
          <Button
            style={{
              backgroundColor: "#ee742f",
              padding: "5px 45px",
              margin: "15px 0",
            }}
            type="primary"
          >
            收藏
          </Button>
        </DetailWrap>
        <article>
          <h1></h1>
          <p></p>
        </article>
      </div>
    );
  }
}

export default Detail;
