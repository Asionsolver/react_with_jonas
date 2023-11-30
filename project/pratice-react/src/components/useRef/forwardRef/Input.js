import React from 'react'

function Input({type, placeholder}, ref) {
  return (
    <div> <input ref={ref} type={type} placeholder={placeholder}></input></div>
  )
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
