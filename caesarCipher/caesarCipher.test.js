const caesarCipher = require('./caesarCipher');
// define examples-test
// (expect (function ("abc" with key=2001) "bcd" ) test four digit number
// (expect (function ("XYZ" with key=1) "YZA") ;; test capitals
// (expect) (function ("attack at midnight" with key = -10) ;; test negative numbers
// (expect) (function ("Turn the lock 3 times!" with key 1) ;; test punctuation.

test('abc with key=1 to equal bcd', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('XYZ with key=1 to equal YZA', () => {
  expect(caesarCipher('XYZ')).toBe('YZA')
})

test('attack at midnight with key = -10', () => {
  expect(caesarCipher('attack at midnight', -10)).toBe('kddkmu kd wsnxsqrd')
})

test('Turn the lock 3 times! with key=1 to equal', () => {
  expect(caesarCipher('Turn the lock 3 times!', 1)).toBe('Uvso uif mpdl 3 ujnft!')
})


