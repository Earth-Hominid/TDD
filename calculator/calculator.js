// A calculator object that contains the basic operations: add, subtract, divide, and multiply.

// The form of information to be represented is atomic, therefore the data defintion will be simple atomic data represented by a number.

// Signature: Number -> Number
// addition produces a number from adding two variables
// subtraction produces a number from subtracting one variable from another
// division produces a number by dividing one variable by another
// multiplication produces a number by multiplying one number by another
// Stub: const calculator = (a,b) =>
// Unit tests are written in calculator.test.js
// Template: const calculator = (a,b) => { return {... n} }

const calculator = (a,b) => {
  return {
    add: a + b,
    subtract:  a - b,
    multiply: a * b,
    divide: a / b
  };
}

module.exports = calculator;
