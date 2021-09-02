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

arrayObject = [1,1,1,1]

const analyze = () => {
  // Determine total number of entries in array:
  const arrayLength =  arrayObject.length
  // // Function adding two array numbers together
  const addition = (sum, arrayObject) => sum + arrayObject
  // Use reduce (which is a method on array object) like we would a for loop 
  const totalSum = arrayObject.reduce(addition, 0)
  // Calculate average
  const average = totalSum / arrayLength

  let object = { 
    length: arrayLength,
    average: average}
  return object
}

module.exports = analyze;