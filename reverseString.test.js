const reverseString = require('./reverseString');

test('changes hello to olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('changes HELLO to Hello', () => {
  expect(reverseString('HELLO')).toBe('OLLEH');
});

test('changes hello World to dlroW olleh', () => {
  expect(reverseString('hello World')).toBe('dlroW olleh');
});

