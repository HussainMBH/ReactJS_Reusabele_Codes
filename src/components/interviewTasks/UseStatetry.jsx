import React,{useState} from 'react'

const UseStatetry = () => {
    const [num, setNum] = useState();



    //let x = 5;
    const handleAdd = ()=>{
        // x = x+1;
        // console.log("x", x);
        // setNum(5);
        setNum((currValue)=>{
            return currValue + 1;
        })
    };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default UseStatetry
