import React, {useState} from 'react'

function UseRefFunction() {
    const [input, setInput] = useState("");

  return (
    <div>
      <h1>Input</h1>
      <input
      type='text'
      value={input}
      onChange={(event) => setInput(event.target.value)}
      />
      <p>My name is {input}</p>
    </div>
  )
}

export default UseRefFunction
