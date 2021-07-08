import react from "react";
import CookBookUi from "../ui/CookBookUi";
import { connect } from "react-redux";
import { loadDataAsync } from "../actionCreator";
@connect(
  (state) => {
    return state.cookbook;
  },
  (dispatch) => ({
    loadData() {
      dispatch(loadDataAsync());
    },
  })
)
class CookBook extends react.Component {
  render() {
    return <CookBookUi list={this.props.list}></CookBookUi>;
  }
  componentDidMount() {
    this.props.loadData();
  }
  componentDidUpdate() {
    console.log("list", this.props.list);
  }
}


export default CookBook;
