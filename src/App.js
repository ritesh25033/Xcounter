import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h1>Count: {count}</h1> {/* Display the count */}
      <button onClick={handleIncrement}>Increment</button>{' '}
      {/* Increment button */}
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>
        Decrement
      </button>{' '}
      {/* Decrement button */}
    </div>
  );
}

export default Counter;
