import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const UseStateFunctonDouble = () => {
    const [count, setCount] = useState(4);
    const decrementCount = () =>{
        setCount(ps => ps -1);
        setCount(ps => ps -1);
    }
    const incrementCount = () =>{
        setCount(ps => ps +1);
        setCount(ps => ps +1);
    }
  return (
    <div>
        <h4>Double Increment and Decrement</h4>
      <Button onClick={decrementCount}>-</Button>
      <span>{count}</span>
      <Button onClick={incrementCount}>+</Button>
    </div>
  )
}

export default UseStateFunctonDouble
