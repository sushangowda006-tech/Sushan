import { useState } from 'react';

function PrimeChecker() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isPrime = (n) => {
    if(n <= 1) {
      return "Not Prime";
    }

    for(let i = 2; i < n; i++) {
      if(n % i === 0) {
        return "Not Prime";
      }
    }
    return "Prime";
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if(isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }
    setResult(isPrime(num));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Prime Number Checker</h1>
      <div>
        <input 
          type="number" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleCheck} style={{ padding: '8px 16px' }}>Check Prime</button>
      </div>
      {result && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Result: {result}</strong>
        </div>
      )}
    </div>
  );
}

export default PrimeChecker;