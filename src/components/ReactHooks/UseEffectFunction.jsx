import React, { useEffect, useState } from 'react'

function UseEffectFunction() {
    const [resource, setResource] = useState('posts');

    useEffect(() => {
        console.log('render')
    }, []);
  return (
    <>
    <div>
      <button onClick={() => setResource('Posts')}>Post</button>
      <button onClick={() => setResource('Users')}>Users</button>
      <button onClick={() => setResource('Comments')}>Comments</button>
    </div>
    <h1>{resource}</h1>
    </>
  );
}
export default UseEffectFunction;