import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <div className="step">
        <button className="btn btnstepD" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <span>Step {step}</span>
        <button className="btn btn-stepI" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>

      <div className="count">
        <button
          className="btn btn-countD"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          className="btn btn-countI"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>

      <p className="result">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        {date.toDateString()}
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
