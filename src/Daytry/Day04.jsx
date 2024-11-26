import React, { useState } from 'react'

function Day04(props) {
    const [name, setName] = useState("MBH");
    const [age, setAge] = useState(24);

    const chnagename = () =>{
        setName("Mohamed");
    }

    const changeage = () => {
        setAge(age + 1);
    }
  return (
    <div>
        <button onClick={chnagename}>Change name</button>
        <h1>Name: {name}</h1>
      <span>name: {props.name}</span>
      <br/>
      <button onClick={changeage}>chnage age</button>
      <h1>Age: {age}</h1>
      <span>age: {props.age}</span>
      <br/>
      <span>job: {props.job}</span>
    </div>
  )
}

export default Day04
