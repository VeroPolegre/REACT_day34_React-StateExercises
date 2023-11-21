import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counter);

  const increase = () => {
    setCounter(counter + props.step);
  };

  const decrease = () => {
    setCounter(counter - props.step);
  };

  return (
    <div>
      Counter: {counter}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
