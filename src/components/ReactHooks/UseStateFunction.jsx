import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStateFunction (){
    const [count, setCount] = useState(4);
    const decrementCount = () =>{
        setCount(count-1);
    }
    const incrementCount = () =>{
        setCount(count + 1);
    }
  return (
    <div>
      <Button onClick={decrementCount}>-</Button>
      <span>{count}</span>
      <Button onClick={incrementCount}>+</Button>
    </div>
  )
}

export default UseStateFunction;
