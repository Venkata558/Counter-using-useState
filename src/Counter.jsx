import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter using react hook</h1>
      <div className="container">
        <p className="counter">{count}</p>
        <button className="btn" onClick={increment}>
          Incremnet
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
export default Counter;
