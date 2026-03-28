import { useState } from 'react';

function NumberGuessingGame() {
  const targetNumber = 2; // Set your number here
  const [userGuess, setUserGuess] = useState('');
  const [result, setResult] = useState('');

  const checkGuess = () => {
    const guess = parseInt(userGuess);
    if (guess === targetNumber) {
      setResult('Correct number!');
    } else {
      setResult(`Wrong number`);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 - 10:</p>
      <div>
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter your guess"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={checkGuess} style={{ padding: '8px 16px' }}>Check</button>
      </div>
      {result && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong style={{ color: result.includes('Correct') ? 'green' : 'red' }}>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default NumberGuessingGame;