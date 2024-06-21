export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => b !== 0 ? a / b : 'Error';

export const sin = (x) => Math.sin(x);
export const cos = (x) => Math.cos(x);
export const tan = (x) => Math.tan(x);
export const sinh = (x) => Math.sinh(x);
export const cosh = (x) => Math.cosh(x);
export const tanh = (x) => Math.tanh(x);

export const log = (x) => Math.log10(x);
export const ln = (x) => Math.log(x);

export const square = (x) => Math.pow(x, 2);
export const cube = (x) => Math.pow(x, 3);
export const power = (base, exponent) => Math.pow(base, exponent);
export const sqrt = (x) => Math.sqrt(x);
export const cbrt = (x) => Math.cbrt(x);
export const nthRoot = (x, n) => Math.pow(x, 1/n);

export const factorial = (n) => {
  if (n < 0) return 'Error';
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

export const random = () => Math.random();

export const percent = (x) => x / 100;

export const getConstant = (constant) => {
  switch (constant) {
    case 'PI': return Math.PI;
    case 'E': return Math.E;
    default: return 0;
  }
};

export const applyFunction = (func, value) => {
  switch (func) {
    case 'SIN': return sin(value);
    case 'COS': return cos(value);
    case 'TAN': return tan(value);
    case 'SINH': return sinh(value);
    case 'COSH': return cosh(value);
    case 'TANH': return tanh(value);
    case 'LOG': return log(value);
    case 'LN': return ln(value);
    case 'SQUARE': return square(value);
    case 'CUBE': return cube(value);
    case 'SQRT': return sqrt(value);
    case 'CBRT': return cbrt(value);
    case 'FACTORIAL': return factorial(value);
    case 'PERCENT': return percent(value);
    case 'RANDOM': return random();
    default: return value;
  }
};

export const calculate = (a, b, operation) => {
  switch (operation) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    case 'POW': return power(a, b);
    case 'NTHROOT': return nthRoot(a, b);
    default: return b;
  }
};