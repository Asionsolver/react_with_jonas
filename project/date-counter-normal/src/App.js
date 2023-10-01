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

  function handleDeStep(){
    if(step > 1){
      setStep((s)=>s-1)
    }
  }
  function handleInStep(){
    setStep((s)=>s+1)
  }

  function handleDeCounter (){
    setCount((c)=> c - step)
  }
  function handleInCounter (){
    setCount((c)=> c + step)
  }
  return(
    <div>
      <div>
        <button onClick={handleDeStep}> - </button>  &nbsp; &nbsp;Step : <span>{step}</span>&nbsp; &nbsp;<button onClick={handleInStep}>+</button>
      </div>
      <br></br>
      <div>
        <button onClick={handleDeCounter}> - </button>  &nbsp; &nbsp;Counter: <span>{count}</span>&nbsp; &nbsp;<button onClick={handleInCounter}>+</button>
      </div>

      <p>
        <span>
          {count === 0 ? "Today is " : count > 0 ? `${count} day from today is ` : `${Math.abs(count)} day ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  )
}

export default App;
