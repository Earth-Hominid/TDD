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

test('changes 𐐶𐐲𐑌𐐼𐐲𐑉 to 𐐎𐐲𐑌𐐼𐐲𐑉 ', () => {
  expect(capitalizeString('𐐶𐐲𐑌𐐼𐐲𐑉')).toBe('𐐎𐐲𐑌𐐼𐐲𐑉')
})
