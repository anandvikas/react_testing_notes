import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        name="amount"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(inputValue)}>Set</button>
    </div>
  );
};
