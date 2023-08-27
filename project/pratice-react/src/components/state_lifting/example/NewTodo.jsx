import React from 'react'

export default function NewTodo(props) {
    props.onNewTodo({tiele:"new todo title"});
  return (
    <div>
      <h1>New Todo</h1>
    </div>
  )
}
