import React, { useEffect, useRef } from "react";
import Input from "./Input";

export default function Form() {
  const inputRef = useRef(null);
  useEffect(() => {
    // component did load
    // console.log('loaded')
    // console.log(inputRef.current)
    inputRef.current.focus();
  }, []);
  return <Input ref={inputRef} type="text" placeholder="Enter Something..." />;
}
