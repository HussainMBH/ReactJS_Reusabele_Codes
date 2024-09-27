import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStateFunction (){

  const [title, setTitle] = useState('Hello MBH')
    const [count, setCount] = useState(0);
    const decrementCount = () =>{
      setCount(count-1);
    }
    const incrementCount = () =>{
      setCount(count+1);
    }
    const changename =()=>{
      setTitle('hey mbh');
    }
  return (
    <div>
      <h1>Wecome to {title}</h1>
      <Button onClick={changename}>click here</Button>
        <h4>Increment & Decrement</h4>
      <Button onClick={decrementCount}>-</Button>
      <span>{count}</span>
      <Button onClick={incrementCount}>+</Button>
    </div>
  )
}

export default UseStateFunction;
