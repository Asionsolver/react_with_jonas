import React from 'react'

export default function Child(props) {
    const data = "passing data from Child.jsx to App.js"
    props.onChildData(data);
  return (
    <div>
      <h1>I am from Child.jsx</h1>
      <h2>Parent Data:{props.data}</h2>
    </div>
  )
}


