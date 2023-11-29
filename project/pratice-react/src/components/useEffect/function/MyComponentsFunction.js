import React, { useEffect, useState } from "react";

export default function MyComponentsFunction() {
  const [count, setCount] = useState(0);
  //   const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
    console.log('Timer')
  };

  useEffect(() => {
    console.log("Updating document title");
    document.title = `Clicked ${count} times`;
}, [count]);

useEffect(() => {
    console.log("starting timer");
    const interval = setInterval(tick, 1000);

    // do the cleanup - stop the timer
    return()=>{
        console.log('Component Unmount');
        clearInterval(interval);
    }
}, []);

const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      {/* <p>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
      </p> */}
      <p>
        <button onClick={addClick} type="button">
          Click
        </button>
      </p>
    </div>
  );
}
