import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Counter/>
    </div>
  );
}

function Counter(){
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDeCounter (){
    setCount((c)=> c - step)
  }
  function handleInCounter (){
    setCount((c)=> c + step)
  }

  function handleReset(){
    setStep(1)
    setCount(0);
  }
  return(
    <div>
      <div>
          <input
            type='range'
            min="0"
            max="10"
            value={step}
            onChange={(e)=>setStep(Number(e.target.value))}            
          />
          <span>Step: {step}</span>
        
      </div>
      <br></br>
      <div>
        <button onClick={handleDeCounter}> - </button>
        <input
          type='text'
          value={count}
          onChange={(e)=>setCount(Number(e.target.value))}
        />
        
        <button onClick={handleInCounter}>+</button>
      </div>

      <p>
        <span>
          {count === 0 ? "Today is " : count > 0 ? `${count} day from today is ` : `${Math.abs(count)} day ago was `}
        </span>
        {date.toDateString()}
      </p>
      {count !== 0 || step !== 1 ? <button onClick={handleReset}>Reset</button> : null}
    </div>
  )
}

export default App;
