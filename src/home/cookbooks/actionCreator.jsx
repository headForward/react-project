import { LOADDATA } from "./actionType";
import { get } from "../../utils/http";
const loadDataSync = (list) => {
  return {
    type: LOADDATA,
    list,
  };
};

const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await get({ url: "/api/List" });
    console.log("result",result);
    dispatch(loadDataSync(result.data.data))
  };
};

export { loadDataSync, loadDataAsync };
