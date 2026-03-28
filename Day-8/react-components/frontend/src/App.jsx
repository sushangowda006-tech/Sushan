import { useState } from 'react';
import NumberGuessingGame from './components/NumberGuessingGame';
import Counter from './components/Counter'; 
import ToggleSwitch from './components/ToggleSwitch';
import GradeCalculator from './components/GradeCalculator'; 
import PrimeChecker from './components/PrimeChecker';
import PassFailChecker from './components/PassFailChecker';

function App() {
  const [currentComponent, setCurrentComponent] = useState('');

  return (
    <div className="App">
      <select 
        value={currentComponent} 
        onChange={(e) => setCurrentComponent(e.target.value)}
      >
        <option value="">-- Select Component --</option>
        <option value="Counter">Counter</option>
        <option value="ToggleSwitch">Toggle Switch</option>
        <option value="NumberGuessingGame">Number Guessing Game</option>
        <option value="GradeCalculator">Grade Calculator</option>
        <option value="PrimeChecker">Prime Checker</option>
        <option value="PassFailChecker">Pass/Fail Checker</option>
      </select>

      {currentComponent === 'Counter' && <Counter />}
      {currentComponent === 'ToggleSwitch' && <ToggleSwitch />}
      {currentComponent === 'NumberGuessingGame' && <NumberGuessingGame />}
      {currentComponent === 'GradeCalculator' && <GradeCalculator />}
      {currentComponent === 'PrimeChecker' && <PrimeChecker />}
      {currentComponent === 'PassFailChecker' && <PassFailChecker />}
    </div>
  );
}

export default App;