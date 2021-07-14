import react from "react";
import { NavBar, Icon } from "antd-mobile";
import { ListWrap, H2Wrap } from "./StyledList";
import { connect } from "react-redux";
import { loadDataAsync } from "../home/cookbooks/actionCreator";
import animate from "../hoc/animate";
@connect(
  (state) => ({
    list: state.cookbook.list,
  }),
  (dispatch) => {
    return {
      getList() {
        dispatch(loadDataAsync());
      },
    };
  }
)
@animate
class List extends react.Component {
  onLeftClick = () => {
    console.log(this);
    let { history } = this.props;
    history.goBack();
  };
  render() {
    return (
      <ListWrap>
        <NavBar
          onLeftClick={this.onLeftClick}
          icon={<Icon type="left" />}
          mode="dark"
        >
          {this.props.location &&
            this.props.location.state &&
            this.props.location.state.title}
        </NavBar>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <img
                    src="https://img0.baidu.com/it/u=3821550280,1634030865&fm=11&fmt=auto&gp=0.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h1>{item.name}</h1>
                  <H2Wrap>{item.burdens}</H2Wrap>
                  <h3>
                    {item.all_click}浏览 {item.favorites}收藏
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </ListWrap>
    );
  }
  componentDidMount() {
    console.log("111", this);
    if (this.props.list.length === 0) {
      this.props.getList();
    }
  }
}

export default List;
