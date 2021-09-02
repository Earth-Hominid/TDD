const analyze= require('./array');

test('length of array equals 4', () => {
  expect(analyze(arrayObject.length)).toBe(4);
});