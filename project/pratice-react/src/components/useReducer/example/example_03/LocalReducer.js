import React, { useReducer } from "react";

const initialState = 0;
const initialState2 = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

export default function LocalReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState2);
  return (
    <>
      <div>
        <div>{`Count -${count < 0 ? ` (${count})` : count}`} </div>
        <button type="button" onClick={() => dispatch("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch("decrement")}>
          Decrement
        </button>
      </div>
      <hr />
      <div>
        <div>{`Count -${count2 < 0 ? ` (${count2})` : count2}`} </div>
        <button type="button" onClick={() => dispatch2("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch2("decrement")}>
          Decrement
        </button>
      </div>
    </>
  );
}
