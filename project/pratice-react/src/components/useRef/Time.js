import React, { useEffect, useRef, useState } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();

  const tick = () => {
    setDate(new Date());
    console.log("Timer");
  };

  useEffect(() => {
    console.log("starting timer");
    buttonRef.current = setInterval(tick, 1000);

    // do the cleanup - stop the timer
    return () => {
    //   console.log("Component Unmount");
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button type="button" onClick={() => clearInterval(buttonRef.current)}>Cleanup</button>
    </div>
  );
}
