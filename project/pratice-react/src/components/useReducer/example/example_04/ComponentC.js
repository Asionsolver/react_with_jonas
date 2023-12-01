import React, { useContext } from 'react'
import { counterContext } from '../../../../App';



export default function ComponentC() {
  const countContext = useContext(counterContext);
  return (
    <div>
      <p>Component C</p> 
      <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button type="button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
 
    </div>
  )
}