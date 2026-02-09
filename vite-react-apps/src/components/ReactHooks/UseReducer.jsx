import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "ISEVENCOUNT":
      return {
        ...state,
        isEvenCount: !state.isEvenCount,
      };

    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    isEvenCount: true,
  });
  return (
    <div>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "ISEVENCOUNT" });
        }}
      >
        Increment
      </button>
      {state.isEvenCount && <p>This is Even Count</p>}
    </div>
  );
}

export default UseReducer;
