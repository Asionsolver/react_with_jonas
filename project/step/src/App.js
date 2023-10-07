import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setName] = useState({name:"Ashis"});
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1){
      setStep((s)=> s - 1);
    };
  }

  function handleNext() {
    if (step < 3){
      setStep((s)=>s + 1);
      // setName({name:"Pritom"});
    }
  }

  return (
    <>
      <button className="close" onClick={()=>setIsOpen((is)=>!isOpen)}>&times;</button>

      {isOpen && (
        <div className="steps">
        <div className="numbers">
        <div className={`${step >=1 ? "active" : ""}`}>1</div>
        <div className={`${step >=2 ? "active" : ""}`}>2</div>
        <div className={`${step >=3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">Step {step}: {messages[step-1]} </p>
      {/* <p className="message">Step {step}: {messages[step-1]} {test.name}</p> */}
        <div className="buttons">
        <Button bgColor = '#7950f2' textColor='#fff' onClick={handlePrevious}> <span>👈</span> Previous
        </Button>

        <Button bgColor= '#7950f2' textColor= '#fff' onClick={handleNext}>
        Next <span>👉</span>
        </Button>
        </div>
    </div>
    )}

    </>
  );
}

function Button({ bgColor, textColor,onClick, children}){
  return(
    <button style={{color:textColor, backgroundColor: bgColor}} onClick={onClick}>
      {children}
    </button>
  );
}