import React from "react";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = ["todo-1"];
function Home() {
    const [todos, setTodos] = React.useState(dummyTodos);

    const handleTodo = (newTodo) => {
        // console.log(newTodo);
        setTodos([...todos, newTodo]);  
    };


   return (
    <div>
      <NewTodo onTodo={handleTodo}/>
      <Todos todos={todos} />
    </div>
  );
}

export default Home;
