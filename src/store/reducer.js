import { combineReducers } from "redux";
import { reducer as cookbook } from "../home/cookbooks/index";
import { reducer as category } from "../home/category/index";
const reducer = combineReducers({
  cookbook,
  category,
});

export default reducer;
