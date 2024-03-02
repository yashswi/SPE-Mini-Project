import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleLog = () => {
    setInput(Math.log(parseFloat(input)).toString());
  };

  const handleSquare = () => {
    setInput(Math.sqrt(parseFloat(input)).toString());
  };

  const handleFactorial = () => {
    const num = parseInt(input);
    if (num < 0) {
      setInput('Error');
      return;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    setInput(result.toString());
  };

  const handleNaturalLog = () => {
    setInput(Math.log(parseFloat(input)).toString());
  };

  const handlePower = () => {
    setInput(Math.pow(parseFloat(input), 2).toString());
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
        data-testid="calculator-input"
      />
      <div className="buttons">
        <button className="operator" onClick={() => handleButtonClick('7')}>7</button>
        <button className="operator" onClick={() => handleButtonClick('8')}>8</button>
        <button className="operator" onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        <button className="operator" onClick={() => handleButtonClick('4')}>4</button>
        <button className="operator" onClick={() => handleButtonClick('5')}>5</button>
        <button className="operator" onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        <button className="operator" onClick={() => handleButtonClick('1')}>1</button>
        <button className="operator" onClick={() => handleButtonClick('2')}>2</button>
        <button className="operator" onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        <button className="operator" onClick={() => handleButtonClick('0')}>0</button>
        <button className="operator" onClick={handleCalculate}>=</button>
        <button className="operator" onClick={() => handleButtonClick('.')}>.</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        <button className="special" onClick={handleLog}>log</button>
        <button className="special" onClick={handleSquare}>√</button>
        <button className="special" onClick={handleFactorial}>!</button>
        <button className="special" onClick={handleNaturalLog}>ln</button>
        <button className="special" onClick={handlePower}>x^2</button>
      </div>
    </div>
// checking the webhook
  );
};

export default App;
