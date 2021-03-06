const capitalizeString = require('./capitalizeString');

test('changes hello to Hello', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});

test('changes HELLO to Hello', () => {
  expect(capitalizeString('HELLO')).toBe('Hello');
});

test('changes hello World to Hello World', () => {
  expect(capitalizeString('hello World')).toBe('Hello world');
});

test('changes πΆπ²ππΌπ²π to ππ²ππΌπ²π ', () => {
  expect(capitalizeString('πΆπ²ππΌπ²π')).toBe('ππ²ππΌπ²π')
})
