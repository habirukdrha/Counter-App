import React, { useReducer } from "react";

const ReducerHook = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1, showText: state.showText };
      case "toogleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const handleClick = () => {
    dispatch({ type: "increment" });
    dispatch({ type: "toogleShowText" });
  };

  return (
    <main className="container">
      <h4>Use Reducer Hook</h4>
      {state.count}
      <button className="btn btn-warning btn-sm m-2" onClick={handleClick}>
        Click me
      </button>
      {state.showText && "This is text"}
    </main>
  );
};

export default ReducerHook;
