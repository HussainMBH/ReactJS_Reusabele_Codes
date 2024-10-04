import React, { useEffect } from 'react'

function UseCallback(props) {
    useEffect(()=> {
        console.log('increment function changed')
    }, [props.increment])

    useEffect(()=> console.log('count changed'), [props.count])
    console.log("Rendered again");
  return (
    <div>
     Count {props.count}
     <button onClick={props.increment}>Increment</button>
    </div>
  )
}

export default UseCallback
