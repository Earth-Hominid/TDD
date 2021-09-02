// Array Analysis. Write a function that takes an array of numbers and returns
// an object with the following properties: average, min, max, and length.

// array -> number ;; signature
// consumes an array, performs calculations, returns object with results ;; purpose
// const "functionName" () => { } ;; stub
// (array [x,y,z])
// Array is (make-object Number Number)
// perform calculations on array
// (define (fn-for-array x))
// (... x (define average value) ; Number
// (... x (define maximum value) ; Number
// (... x (define minimum value) ; Number
// (... x (define length value)) ; Number



const analyze = (arrayObject) => {
  // Determine total number of entries in array:
  const arrayLength = arrayObject.length;
  // // Function adding two array numbers together
  const addition = (sum, arrayObject) => sum + arrayObject;
  // Use reduce (which is a method on array object) like we would a for loop
  const totalSum = arrayObject.reduce(addition, 0);
  // Calculate average
  const average = totalSum / arrayLength;
  // Destructure array and save first index
  const [firstIndexofArray] = arrayObject;
  // Function to determine the highest number between two numbers
  const maximum = (accumulator, arrayObject) =>
    Math.max(accumulator, arrayObject);
  // Calculate the highest number in the array
  const highestNumber = arrayObject.reduce(maximum, firstIndexofArray);
  // Function to determine the lowest number between two numbers
  const minimum = (accumulator, arrayObject) =>
    Math.min(accumulator, arrayObject);
  // Calculate the lowest number in the array
  const lowestNumber = arrayObject.reduce(minimum, firstIndexofArray);

  let object = {
    length: arrayLength,
    average: average,
    min: lowestNumber,
    max: highestNumber,
  };
  return object;
};

module.exports = analyze;
