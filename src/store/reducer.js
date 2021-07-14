import { combineReducers } from "redux";
import { reducer as cookbook } from "../home/cookbooks/index";
import { reducer as category } from "../home/category/index";
import { reducer as more } from "../home/more/index";
const reducer = combineReducers({
  cookbook,
  category,
  more,
});

export default reducer;
