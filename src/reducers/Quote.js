const quoteReducer = (state = "", action) => {
  switch (action.type) {
    case "SETQUOTE":
      return action.payload;
    default:
      return state;
  }
};

export default quoteReducer;
