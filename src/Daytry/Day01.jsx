//import { Button } from 'bootstrap';
import React, { useState } from 'react'

function Day01(props) {
    const [name, setName] = useState("MBH");
    const [num, setNum] = useState(1);

    const namechange= () =>{
        setName("Bahir")
    }
    const addnumber = () => {
        setNum(num*2);
    }


  return (
    <div>
        <h1>Day 01</h1>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Mail: {props.mail}</p>
        <span>{name}</span><br/>
        <input type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}></input>
        <button onClick={namechange}>Change Name</button>
        <br/>

        <span>{num}</span>
        <br/>
        <button onClick={addnumber}>Multiply Number</button>
      
    </div>
  )
}

export default Day01
