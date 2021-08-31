// capitalize(string) takes a string and returns that string with the first character capitalized.

// The form of information to be represented is atomic, therefore the data defintion will be a simple atomic data represented by a String.

// Signature: String -> String
// Produces "a", the function produces a string.
// Stub: function capitilizeString() {}
// Unit tests are written in capitalizeString.test.js
// Template: function capitalizeString(x) {(...x)}
// Templatete: function capitallizeString([first, ...rest]) {return [first.toUpperCase(), ...rest].join("")};

// const capitalizeString = ([a, ...b]) => [a.toUpperCase(), ...b.toLowerCase()].join('') 
const capitalizeString = (a) => {
  return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
}


module.exports = capitalizeString;