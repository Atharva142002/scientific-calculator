import * as calc from '../utils/calculations';

function calculatorReducer(state, action) {
  switch (action.type) {
    case 'NUMBER':
      return {
        ...state,
        displayValue: state.isNewInput ? action.payload : state.displayValue + action.payload,
        isNewInput: false
      };
    case 'OPERATION':
      return {
        ...state,
        previousValue: state.displayValue,
        operation: action.payload,
        isNewInput: true
      };
    case 'FUNCTION':
      return {
        ...state,
        displayValue: calc.applyFunction(action.payload, parseFloat(state.displayValue)).toString(),
        isNewInput: true
      };
    case 'CONSTANT':
      return {
        ...state,
        displayValue: calc.getConstant(action.payload).toString(),
        isNewInput: true
      };
    case 'CALCULATE':
      return {
        ...state,
        displayValue: calc.calculate(parseFloat(state.previousValue), parseFloat(state.displayValue), state.operation).toString(),
        previousValue: null,
        operation: null,
        isNewInput: true
      };
    case 'CLEAR':
      return {
        ...state,
        displayValue: '0',
        previousValue: null,
        operation: null,
        isNewInput: true
      };
    case 'DELETE':
      return {
        ...state,
        displayValue: state.displayValue.slice(0, -1) || '0'
      };
    default:
      return state;
  }
}

export default calculatorReducer;