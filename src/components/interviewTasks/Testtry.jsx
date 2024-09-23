import { useState } from "react";
import React from 'react'

function testtry() {

    const [num, setNum] = useState(0);
    

  return (
    <div>
      <h1>Hello</h1>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>click</button>
    </div>
  )
}

export default testtry
