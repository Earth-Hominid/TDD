const analyze= require('./array');

test('length of array equals 4', () => {
  expect(analyze(arrayObject)).toEqual({length: 4});
});