import React, { useRef, useState } from 'react';

function UseRefFunction() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    const value = inputRef.current.value;
    //alert(`You entered: ${value}`);
    setInputValue(value); // Update the state with the input value
  };

  return (
    <div>
      <h1>Input</h1>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Submit</button>
      <p>Your Entered: {inputValue}</p>
    </div>
  );
}

export default UseRefFunction;
