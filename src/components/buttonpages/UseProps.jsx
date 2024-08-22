import React from 'react';

function UseProps(props) { 
  return (
    <div>
      <h1>This is UseProps Component</h1>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h3>Phone Number: {props.phonenumber}</h3>
      <h3>Email: {props.mail}</h3>
    </div>
  );
}

export default UseProps;
