import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Counter</h1>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Total count: {count}</strong>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={decrementCounter} style={{ padding: '8px 16px', marginRight: '10px' }}>Sub - 1</button>
        <button onClick={incrementCounter} style={{ padding: '8px 16px' }}>Add + 1</button>
      </div>
    </div>
  );
}

export default Counter;