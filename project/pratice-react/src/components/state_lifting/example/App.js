import React from 'react'

import Child from "./components/state_lifting/example/Child";
import Todo from "./components/state_lifting/example/Todo";
import NewTodo from "./components/state_lifting/example/NewTodo";



export default function App() {
    const data = "I am from App.js";

    const handleData = (childData) => {
        console.log(childData);
    }

    const handleNewTodo = (newTodo) => {
        console.log(newTodo);
    }
  return (
    <div>
      <Child data={data} onChildData={handleData}/>
        <Todo title="todo title"/>
        <NewTodo onNewTodo={handleNewTodo}/>
    </div>
  )
}