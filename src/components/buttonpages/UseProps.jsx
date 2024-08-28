import React from 'react';

function UseProps({name, age, contactNumber, mail}) { 
  return (
    <div>
      <h1>This is UseProps Component</h1>
      <h2>Name: {name}</h2>
      <h3>Age: { age}</h3>
      <h3>Phone Number: { contactNumber}</h3>
      <h3>Email: { mail}</h3>
      
    </div>
  );
}

export default UseProps;
