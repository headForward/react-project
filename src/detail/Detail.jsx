import react from "react";
import { NavBar, Icon } from "antd-mobile";
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
          {this.props.location.state.obj.name}
        </NavBar>
      </div>
    );
  }
}

export default Detail;
