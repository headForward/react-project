import { CHANGESWITCH } from "./actionType";

const defaultState = {
  MapChecked: JSON.parse(localStorage.getItem("checked")),
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGESWITCH:
      return {
        ...state,
        MapChecked: !state.MapChecked,
      };
    default:
      return state;
  }
};

export default reducer;
