//import { Button } from 'bootstrap';
import React ,{useState}from 'react'

function Day03() {
    const [name, setName] = useState("Bahir");
    const [num, setNum] = useState(0);

    const increasingnum = () => {
        setNum(num+1);
    }
    const changename = () => {
        setName("Hussain");
    }
  return (
    <div>
      <span>Count number: {num}</span>
      <button onClick={increasingnum}>Add Number</button>
      <span>Name {name}</span>
      <button onClick={changename}>name change</button>
    </div>
  )
}

export default Day03
