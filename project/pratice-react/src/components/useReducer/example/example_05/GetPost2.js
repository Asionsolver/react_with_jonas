import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "Error":
      return {
        loading: false,
        post: {},
        error: "There was a problem fetching",
      };

    default:
      return state;
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "Success", result: data });
      })
      .catch(() => {
        dispatch({ type: "Error" });
      });
  }, []);
  return (
    <>
      <div>
        {state.loading ? "Loading...." : <p style={{color:'#fff', padding:'10px', fontSize:'25px', backgroundColor:'#000'} }>{state.post.title}</p>}
        {state.error ? state.error : null}
      </div>
    </>
  );
}
