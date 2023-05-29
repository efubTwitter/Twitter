const initialState = {
  backgroundColor: "black",
  color: "white",
  hover: "#181818",
};

function displayReducer(currentState = initialState, action) {
  switch (action.type) {
    case "white":
      return {
        ...currentState,
        backgroundColor: "white",
        color: "black",
        hover: "#eaeaea",
      };
    case "black":
      return {
        ...currentState,
        backgroundColor: "black",
        color: "white",
        hover: "#181818",
      };
    default:
      return currentState;
  }
}

export default displayReducer;
