import React from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {
  return (
    <div>
    <p style={{color:'black', padding: '10px', backgroundColor: 'aqua'}}>This is Dum Component. Because it's create only how to context api use in useReducer Hook.</p>
    <ComponentB/>
    </div>
  )
}
