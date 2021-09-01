// Caesar Cipher
// "A type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on."

// signature: string -> string 
// purpose: produces string in which each plaintext letter, is substituted with the cipher text letter 

// define examples-test
// (check-expect ("abc" with key=1) "bcd" ) 
// (check-expect ("XYZ" with key=1) "YZA") ;; testing capitals
// (check-expect) ("attack at midnight" with key = -10) ;; testing negative numbers
// (check-expect) ("The treasue is barried beneath the rock, remember to turn the lock 3 times!") ;; check punctuation.

// const "function name" = (string, key) => {
//  first: obtain cipher key which will be a number
//  second: use key to determine new characters
//  third: use replace() to return a modified string 
//  return new string } 

// template: const caesarCipher = () => { ... a; return string } 


const plaintext;
const key;
const value = key % 26
let matchingRegex = /[a-z]/gi

const caeser = (string, key) => {
  if (key === 0) return string;
  if (key < 0) return key += 26;
  
  if(regex.test(plaintext[i] === false)) {
    newString === plaintext
  }

  return string.replace(/[a-z]/gi, character) => String.fromCharCode(character.charCodeAt)
}

