import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function UseStateFunction (){

  const [title, setTitle] = useState('Hello MBH')
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(0);
    const [input, setInput] = useState("");

    
    const countclick = () =>{
      setClick(click+1);
    }
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
      <br/>
      <br/>
      <Button onClick={countclick}>Click Here</Button>
      <br/>
      <span>You clicked {click}th times</span>
        <h4>Increment & Decrement</h4>
      <Button onClick={decrementCount}>-</Button>
      <span>{count}</span>
      <Button onClick={incrementCount}>+</Button>
      <br/>
      <br/>
      <input 
      type='text'
      value={input}
      onChange={(event) => setInput(event.target.value)}
      />
      <p>My Name is {input}</p>
    </div>
  )
}

export default UseStateFunction;
