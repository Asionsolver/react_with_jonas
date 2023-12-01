import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "increment2":
      return {
        ...state,
        counter2: state.counter2 + action.value,
      };
    case "decrement2":
      return {
        ...state,
        counter2: state.counter2 - action.value,
      };

    default:
      return state;
  }
};

export default function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <div>
          {`Count -${
            count.counter < 0 ? ` (${count.counter})` : count.counter
          }`}
        </div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 5,
            })
          }
        >
          Decrement by 5
        </button>
      </div>
      <hr></hr>
      <div>
        <div>
          {`Count -${
            count.counter2 < 0 ? ` (${count.counter2})` : count.counter2
          }`}
        </div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 6,
            })
          }
        >
          Increment by 6
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 3,
            })
          }
        >
          Decrement by 3
        </button>
      </div>
    </>
  );
}
