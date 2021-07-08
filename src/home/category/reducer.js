const defaultState = {
  cateTopTabType: "category",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "classify":
      return {
        ...state,
        cateTopTabType: "category",
      };
    case "ingredient":
      return {
        ...state,
        cateTopTabType: "material",
      };
    default:
      return state;
  }
};

export default reducer;
