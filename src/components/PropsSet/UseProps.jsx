import React from 'react'

function UseProps({name, age}) {
  return (
    <div>
      <h1>This is UseProps Component</h1>
      {/* <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.phone}</h3>
      <h4>{props.email}</h4> */}
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default UseProps;