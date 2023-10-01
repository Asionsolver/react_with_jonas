```Javascript

import {useState} from "react";

const message =[
    "Learn React 📖",
    "Apply for jobs 💼",
    "Invest your new income 🤑 "
]

export default function App(){
    const [step, setStep] = useState(1);
    const[isOpen, setOpen] useState(true);

    function handlePrevious(){
        if(step > 1){
            setStep((step)=>step -1)
        }


    }
    function handleNext(){
        if(step < 3){
            setStep((step)=>step +1);
            // setStep((step)=>step +1);
        }
    }
    return(
        <>
            <button className="close" onClick={()=>setOpen((isOpen) => !isOpen)}>&times;</button>
        {isOpen && (
            <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <p className="message">
                Step {step}: {message[step - 1]}
                </p>

            <div>
                <button style={{backgroundColor: "#7950f2", color:"#fff" onClick={handlePrevious}}}>Previous</button>
                <button style={{backgroundColor: "#7950f2", color:"#fff" onClick={handleNext}}}>Next</button>
            </div>
        </div>
    )}
        </>
    );
}



```