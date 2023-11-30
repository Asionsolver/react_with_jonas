import React, { useEffect, useRef } from 'react'

export default function Form() {
    const inputRef = useRef(null);
    useEffect(()=>{
        // component did load
        // console.log('loaded')
        // console.log(inputRef.current)
        inputRef.current.focus()
    },[])
  return (
    <div>
        <p>
            <input ref={inputRef} type='text' placeholder='Enter Something...'></input>
        </p>
    </div>
  )
}
