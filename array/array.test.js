const analyze = require('./array');

test('test regular array', () => {
  expect(analyze([1, 1, 1, 1])).toEqual({
    length: 4,
    average: 1,
    max: 1,
    min: 1,
  });
});

test('test for array with 0', () => {
  expect(analyze([0])).toEqual({
    length: 1,
    average: 0,
    max: 0,
    min: 0,
  });
});

test('test for array with letters', () => {
  expect(analyze(['a', 'b', 'c'])).toEqual({
    length: 3,
    average: NaN,
    max: NaN,
    min: NaN,
  });
});

test('test for array with negative numbers', () => {
  expect(analyze([-10, -10, -10])).toEqual({
    length: 3,
    average: -10,
    max: -10,
    min: -10,
  });
});
