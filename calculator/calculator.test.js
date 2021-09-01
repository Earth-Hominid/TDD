const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator(1, 2).add).toBe(3);
});

test('adds 0 + 0 to equal 0', () => {
  expect(calculator(0, 0).add).toBe(0);
});

test('adds -1 + -3 to equal -4', () => {
  expect(calculator(-1, -3).add).toBe(-4);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(calculator(5, 2).subtract).toBe(3);
});

test('subtracts 0 - 0 to equal 0', () => {
  expect(calculator(0, 0).subtract).toBe(0);
});

test('subtracts 25 - 50 to equal -25', () => {
  expect(calculator(25, 50).subtract).toBe(-25);
});

test('multiplies 10 * 2 to equal 20', () => {
  expect(calculator(10, 2).multiply).toBe(20);
});

test('multiplies 0 * 0 to equal 0', () => {
  expect(calculator(0, 0).multiply).toBe(0);
});

test('multiplies 10 * -2 to equal -20', () => {
  expect(calculator(10, -2).multiply).toBe(-20);
});

test('divides 4 by 2 to equal 2', () => {
  expect(calculator(4, 2).divide).toBe(2);
});

test('divides 0 by 0 to equal 0', () => {
  expect(calculator(0, 0).divide).toBe(NaN);
});

test('divides 4 by -2 to equal 2', () => {
  expect(calculator(4, -2).divide).toBe(-2);
});

