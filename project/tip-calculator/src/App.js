import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const[bill, setBill] = useState('');
  const[percentage1, setPercentage1] = useState(0);
  const[percentage2, setPercentage2] = useState(0);

  const tip = Math.round(bill * ((percentage1 + percentage2)/2)/100);

  function handleReset(){
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <h1>This is TipCalculator</h1>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?&nbsp;&nbsp;
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?&nbsp;&nbsp;
      </SelectPercentage>
     {bill>0&&
     <>
      <Output bill={bill} tip={tip}/>
      <Reset onReset={handleReset}/>
     </>}
    </>
  );
}
function BillInput({bill, onSetBill}) {
  return (
    <div>
      <label>How Much was the bill?&nbsp;&nbsp;</label>
      <input type="text" placeholder="Bill value" value={bill} onChange={e=>onSetBill(Number(e.target.value))}/>
    </div>
  );
}
function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e=>onSetPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({bill, tip}) {
  return (
    <div>
      <h3>You pay ${bill + tip} (${bill} + ${tip})</h3>
    </div>
  );
}
function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>;
}
export default App;
