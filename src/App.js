import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [calcValue, setCalcValue] = useState(0);
  const [negative, setNegative] = useState(false);
  const [calcType, setCalcType] = useState('');

  const handleNumberClick = (event) => {
    const enteredValue = parseInt(event.target.value);
    const currentCalcValue = parseInt(calcValue);
    const newCalcStr =
      enteredValue === enteredValue + currentCalcValue
        ? enteredValue
        : currentCalcValue + '' + enteredValue;
    setCalcValue(newCalcStr);
  };

  const handleNegativeClick = (event) => {
    const newCalcValue = event.target.value
      ? parseInt(calcValue) * -1
      : calcValue;
    setCalcValue(newCalcValue);
    const newNegative = newCalcValue < 0;
    setNegative(newNegative);
  };

  return (
    <div className='App'>
      <div className='number-spot'>
        <p>{calcValue}</p>
      </div>
      <div className='btn-panel'>
        <div className='btn-row'>
          <div className='btn-row-container'>
            <button className='btn'>AC</button>
            <button
              className='btn'
              value={negative}
              onClick={handleNegativeClick}
            >
              +/-
            </button>
            <button className='btn'>%</button>
            <button className='btn'>
              <FontAwesomeIcon icon={faDivide} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn' value='7' onClick={handleNumberClick}>
              7
            </button>
            <button className='btn' value='8' onClick={handleNumberClick}>
              8
            </button>
            <button className='btn' value='9' onClick={handleNumberClick}>
              9
            </button>
            <button className='btn'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn' value='4' onClick={handleNumberClick}>
              4
            </button>
            <button className='btn' value='5' onClick={handleNumberClick}>
              5
            </button>
            <button className='btn' value='6' onClick={handleNumberClick}>
              6
            </button>
            <button className='btn'>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn' value='1' onClick={handleNumberClick}>
              1
            </button>
            <button className='btn' value='2' onClick={handleNumberClick}>
              2
            </button>
            <button className='btn' value='3' onClick={handleNumberClick}>
              3
            </button>
            <button className='btn'>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn' value='0' onClick={handleNumberClick}>
              0
            </button>
            <button className='btn'>.</button>
            <button className='btn btn-two yellow-bkg'>
              <FontAwesomeIcon icon={faEquals} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
