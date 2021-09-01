// reverseString(string) takes a string and returns it reversed.

// The form of information to be represented is atomic, therefore the data defintion will be simple atomic data represented by a String.

// Signature: String -> String
// Produces "a", the function produces a string.
// Stub: function reverseString() {}
// Unit tests are written in reveseString.test.js
// Template: function reverseString(a) {(...a)}

function reverseString(a) {
  return a.split('').reverse().join('');
}


module.exports = reverseString;
