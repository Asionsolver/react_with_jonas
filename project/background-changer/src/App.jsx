import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="flex w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2 gap-8 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-2 py-2 rounded-xl">
          <button onClick={()=>{setColor('red')}}
            className="outline-none px-6 py-2 rounded-md text-white font-medium shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button onClick={()=>{setColor('orange')}}
            className="outline-none px-6 py-2 rounded-md text-white font-medium shadow-lg"
            style={{ background: "orange" }}
          >
            Orange
          </button>
          <button onClick={()=>{setColor('blue')}}
            className="outline-none px-6 py-2 rounded-md text-white font-medium shadow-lg"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
