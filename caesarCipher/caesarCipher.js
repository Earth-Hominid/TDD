// Caesar Cipher
// "A type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on."

// signature: string -> string
// purpose: produces string in which each plaintext letter, is substituted with the cipher text letter

// define examples-test
// (expect (function ("abc" with key=2001) "bcd" ) test four digit number
// (expect (function ("XYZ" with key=1) "YZA") ;; test capitals
// (expect) (function ("attack at midnight" with key = -10) ;; test negative numbers
// (expect) (function ("Turn the lock 3 times!" with key 1) ;; test punctuation.

// const "function name" = (string, key) => {
//  first: obtain cipher key which will be a number
//  second: use key to determine new characters
//  third: use replace() to return a modified string
//  return new string }

// template: const caesarCipher = () => { ... a; return string }

let matchingRegex = /[a-z]/gi;

const caesarCipher = (string, key) => {
  // handles if the key value equals 0
  if (key === 0) return string;
  // handles if the key value is a negative number
  if (key < 0) return (key += 26);
  // key value has to be a number
  if (key === NaN) return string;
  return string.replace(matchingRegex, (character) => {
    let newCharacter = String.fromCharCode(
      (character.charCodeAt(0) + key - 97) % (26) + 97
    );
    return newCharacter;
  });
};
module.exports = caesarCipher;
