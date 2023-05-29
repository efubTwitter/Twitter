const initialState = {
  backgroundColor: "black",
  color: "white",
  hover: "#181818",
  blur: "rgba(0, 0, 0, 0.65)",
};

function displayReducer(currentState = initialState, action) {
  switch (action.type) {
    case "white":
      return {
        ...currentState,
        backgroundColor: "white",
        color: "black",
        hover: "#eaeaea",
        blur: "white",
      };
    case "black":
      return {
        ...currentState,
        backgroundColor: "black",
        color: "white",
        hover: "#181818",
        blur: "rgba(0, 0, 0, 0.65)",
      };
    default:
      return currentState;
  }
}

export default displayReducer;
