import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
const [count, setcount] = useState(0)
const min=0
const max = 20
function increseHandler() {
  if (count < 20) {setcount((prev) => prev + 1)}
  
};
function decreseHandler() {
  if(count >0){setcount(prev=>prev-1)}
}
  return (
    <div className="counter-main">
      
        <h1>Counter App</h1>
        <div className="counter">
          <h3>Count: {count}</h3>
        </div>
        <div className="btn">
          <button onClick={increseHandler}>Increase</button>
          <button onClick={decreseHandler}>Decrease</button>
        </div>
      
    </div>
  );
}

export default Counter
