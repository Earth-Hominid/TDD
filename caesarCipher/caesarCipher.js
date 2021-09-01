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


letters = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25
}

const key = () => {
  return Object.keys(letters).find(key =>object[key] === value)
}

console.log(key)

const caeser = (string, key) => {
  if (key === 0) return string;

  return string.
}




