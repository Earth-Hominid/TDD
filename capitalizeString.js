// capitalize(string) takes a string and returns that string with the first character capitalized.

// The form of information to be represented is atomic, therefore the data defintion will be a simple atomic data represented by a String.

// Signature: String -> String
// Produces "a", the function produces a string.
// Stub: function capitilizeString() {}
// Unit tests are written in capitalizeString.test.js
// Template: function capitalizeString(x) {(...x)}
// function capitallizeString([first, ...rest]) {return [first.toUpperCase(), ...rest].join("")};

 const capitalizeString = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

module.exports = capitalizeString;
