import React, { useState } from "react";

export default function TodoFunc() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const warningMessage = inputValue.includes(".js")
      ? "You need JavaScript skill to complete the task. Do you have it?"
      : null;

      setTodo(inputValue);
      setWarning(warningMessage);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h2>{warning || "Good choice!"}</h2>
    </div>
  );
}


