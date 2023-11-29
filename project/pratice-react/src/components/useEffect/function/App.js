import React, { useState } from "react";
import MyComponentsFunction from "./MyComponentsFunction";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <MyComponentsFunction />}
      <button
        type="button"
        onClick={()=> setShow((prevShow) => !prevShow)}
      >{show ? 'Hide Post' : 'Show Post'}</button>
    </div>
  );
}
