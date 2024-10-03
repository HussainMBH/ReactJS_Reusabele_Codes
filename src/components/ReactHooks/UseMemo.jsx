import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);

    const [todos, setTodos] = useState([]);

     const calculation = useMemo(() => expensiveCalculation(count),[count]);
    //const calculation = expensiveCalculation(count);


    const increment = () => {
        setCount(count+1);
    }

    const addTodo = () => {
        setTodos((prevState) => [...prevState, "New Todo"]);
      };
    return (
        <div>
          <div>
            <h2>My Todos </h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}> + </button>
            <h2>Costly Calculation</h2>
            {calculation}
          </div>
        </div>
      );
      
    };
    
    
    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    };
    
    // const simpleCalculation = (num) => {
    //   console.log("I am simple function...");
    //   for (let i = 0; i < 10; i++) {
    //     num += 1;
    //   }
    //   return num;
    // }

export default UseMemo
