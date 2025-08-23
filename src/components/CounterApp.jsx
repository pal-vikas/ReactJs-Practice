import React, { useState } from 'react'
import '../App.css'

function CounterApp() {
    const [count, setCount] = useState(0);
   function incrementHandle() {
            setCount(prev => prev + 1)
       }
    function decrementHandle ()
    {
        count > 0 ? setCount(prev => prev - 1) : "";
    }   


    
  return (
    <div>
          <h1>Counter Application !</h1>
          <h1>{count}</h1>
            <div>
              <button onClick={incrementHandle}>Increment</button>
             <button onClick={decrementHandle}>Decrement</button>
            </div>
    </div>
  )
}

export default CounterApp
