// Caesar Cipher
// "A type of substitution cipher in which each letter in the plaintext is 'shifted' a
// certain number of places down the alphabet. For example, with a shift of 1, A would be
// replaced by B, B would become C, and so on."

// signature: string -> string
// purpose: produces string inwhich each character is substituted with the cipher charcter

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

const caesarCipher = (string, key) => {
  let matchingRegex = /[a-zA-z]/gi;

  // handles if the key value is a negative number
  const handleNegativeKey = key < 0 ? (key += 26) : key;

  return string.replace(matchingRegex, (character) => {
    let lowerCaseChar = character.toLowerCase();
    let newCharacter = String.fromCharCode(
      ((lowerCaseChar.charCodeAt(0) + handleNegativeKey - 97) % 26) + 97
    );
    return character === character.toUpperCase()
      ? newCharacter.toUpperCase()
      : newCharacter;
  });
};

module.exports = caesarCipher;
