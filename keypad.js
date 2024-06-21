import React from 'react';
import Button from './ button';

function Keypad({ onButtonClick }) {
  const buttons = [
    { label: '2nd', type: 'FUNCTION', value: '2nd' },
    { label: 'π', type: 'CONSTANT', value: 'PI' },
    { label: 'e', type: 'CONSTANT', value: 'E' },
    { label: 'C', type: 'CLEAR', value: 'C' },
    { label: '⌫', type: 'DELETE', value: 'DELETE' },
    { label: 'x²', type: 'FUNCTION', value: 'SQUARE' },
    { label: 'x³', type: 'FUNCTION', value: 'CUBE' },
    { label: 'xʸ', type: 'OPERATION', value: 'POW' },
    { label: 'eˣ', type: 'FUNCTION', value: 'EXP' },
    { label: '10ˣ', type: 'FUNCTION', value: 'POW10' },
    { label: '1/x', type: 'FUNCTION', value: 'RECIPROCAL' },
    { label: '√x', type: 'FUNCTION', value: 'SQRT' },
    { label: '∛x', type: 'FUNCTION', value: 'CBRT' },
    { label: 'ʸ√x', type: 'OPERATION', value: 'NTHROOT' },
    { label: 'ln', type: 'FUNCTION', value: 'LN' },
    { label: 'log₁₀', type: 'FUNCTION', value: 'LOG' },
    { label: 'x!', type: 'FUNCTION', value: 'FACTORIAL' },
    { label: 'sin', type: 'FUNCTION', value: 'SIN' },
    { label: 'cos', type: 'FUNCTION', value: 'COS' },
    { label: 'tan', type: 'FUNCTION', value: 'TAN' },
    { label: 'e', type: 'CONSTANT', value: 'E' },
    { label: 'EE', type: 'OPERATION', value: 'EE' },
    { label: 'Rad', type: 'FUNCTION', value: 'RAD' },
    { label: 'sinh', type: 'FUNCTION', value: 'SINH' },
    { label: 'cosh', type: 'FUNCTION', value: 'COSH' },
    { label: 'tanh', type: 'FUNCTION', value: 'TANH' },
    { label: 'π', type: 'CONSTANT', value: 'PI' },
    { label: 'Rand', type: 'FUNCTION', value: 'RANDOM' },
    { label: '(', type: 'PARENTHESIS', value: '(' },
    { label: ')', type: 'PARENTHESIS', value: ')' },
    { label: '%', type: 'FUNCTION', value: 'PERCENT' },
    { label: '7', type: 'NUMBER', value: '7' },
    { label: '8', type: 'NUMBER', value: '8' },
    { label: '9', type: 'NUMBER', value: '9' },
    { label: '÷', type: 'OPERATION', value: '/' },
    { label: '4', type: 'NUMBER', value: '4' },
    { label: '5', type: 'NUMBER', value: '5' },
    { label: '6', type: 'NUMBER', value: '6' },
    { label: '×', type: 'OPERATION', value: '*' },
    { label: '1', type: 'NUMBER', value: '1' },
    { label: '2', type: 'NUMBER', value: '2' },
    { label: '3', type: 'NUMBER', value: '3' },
    { label: '-', type: 'OPERATION', value: '-' },
    { label: '0', type: 'NUMBER', value: '0' },
    { label: '.', type: 'NUMBER', value: '.' },
    { label: '=', type: 'CALCULATE', value: '=' },
    { label: '+', type: 'OPERATION', value: '+' },
  ];

  return (
    <div className="keypad">
      {buttons.map((button) => (
        <Button
          key={button.label}
          label={button.label}
          onClick={() => onButtonClick(button.type, button.value)}
          className={`button-${button.type.toLowerCase()}`}
        />
      ))}
    </div>
  );
}

export default Keypad;