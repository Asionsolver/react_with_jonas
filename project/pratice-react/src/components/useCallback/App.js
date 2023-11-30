import React, { useCallback, useState } from "react";
import Title from "./components/useCallback/Title";
import ShowCount from "./components/useCallback/ShowCount";
import Button from "./components/useCallback/Button";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount)=> prevCount + 1)
  },[])
  const incrementByFive = useCallback(() => {
    setCount2((prevCount)=> prevCount + 5)
  },[])
  return (
    <div>
      <Title/>
      <ShowCount count={count1} title='Counter1'/>
      <Button handleClick={incrementByOne}> Increment By One</Button>
      <hr></hr>
      <ShowCount count={count2} title='Counter2'/>
      <Button handleClick={incrementByFive}>Increment By Five </Button>
    </div>
  );
}
