const caesarCipher = require('./caesarCipher');
// define examples-test
// (expect (function ("abc" with key=1) "bcd" ) ;; lower case test
// (expect (function ("XYZ" with key=1) "YZA") ;; capital case test
// (expect) (function ("attack at midnight" with key = -10) ;; negative key test
// (expect) (function ("Turn the lock 3 times!" with key 1) ;; punctuation test
// (expect) (function ("abc with key = 0) ;; key set to 0 test

test('abc with key=1 to equal bcd', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('ABC with key=1 to equal YZA', () => {
  expect(caesarCipher('XYZ', 1)).toBe('YZA');
});

test('attack at midnight with key = -10', () => {
  expect(caesarCipher('attack at midnight', -10)).toBe('qjjqsa qj cytdywxj');
});

test('Turn the lock 3 times! with key=1', () => {
  expect(caesarCipher('Turn the lock 3 times!', 1)).toBe(
    'Uvso uif mpdl 3 ujnft!'
  );
});

test('abc with key=0 to be abc', () => {
  expect(caesarCipher('abc', 0)).toBe('abc');
});
