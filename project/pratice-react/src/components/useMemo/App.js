import React, { useCallback, useMemo, useState } from "react";
import Title from "./components/useMemo/Title";
import ShowCount from "./components/useMemo/ShowCount";
import Button from "./components/useMemo/Button";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1; // costly operation
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter1" />
      <Button handleClick={incrementByOne}> Increment By One</Button>
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <hr></hr>
      <ShowCount count={count2} title="Counter2" />
      <Button handleClick={incrementByFive}>Increment By Five </Button>
    </div>
  );
}
