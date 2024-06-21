import React, { useReducer, useEffect } from 'react';


import calculatorReducer from '../reducers/calculatorReducer';

const initialState = {
  displayValue: '0',
  previousValue: null,
  operation: null,
  memory: 0,
  isNewInput: true
};

function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleButtonClick = (type, value) => {
    dispatch({ type, payload: value });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (/[0-9.]/.test(key)) {
        dispatch({ type: 'NUMBER', payload: key });
      } else if (['+', '-', '*', '/'].includes(key)) {
        dispatch({ type: 'OPERATION', payload: key });
      } else if (key === 'Enter') {
        dispatch({ type: 'CALCULATE' });
      } else if (key === 'Escape') {
        dispatch({ type: 'CLEAR' });
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;