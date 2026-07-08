/**
 * Number :  an integer or a floating-point number is a number data type
 */
/**
 * inbuild methods  // Converting a number to a string and formatting a number
 * toFixed(): This method formats a number using fixed-point notation and returns a string representation of the number.
 * toString(): This method converts a number to a string and returns the result.
 * toExponential(): This method returns a string representing the number in exponential notation.
 * toPrecision(): This method formats a number to a specified length and returns a string representation of the number.
 */


/**
 * Number pproperties
 * Number.MAX_VALUE: This property represents the largest positive finite value that can be represented in JavaScript.
 * Number.MIN_VALUE: This property represents the smallest positive finite value that can be represented in JavaScript.
 * Number.MAX_SAFE_INTEGER: This property represents the maximum safe integer in JavaScript, which is 2^53 - 1.
 * Number.MIN_SAFE_INTEGER: This property represents the minimum safe integer in JavaScript, which is -(2^53 - 1).
 */

/**
 * Arthematic Operators
 * 1. Addition (+)
 * 2. Subtraction (-)
 * 3. Multiplication (*)
 * 4. Division (/)
 * 5. Modulus (%)
 * 6. Exponentiation (**)
 */

// let myNumber = -42;

// console.log(typeof(myNumber)); // Output: number

// myNumber = 3.14;

// console.log(typeof(myNumber)); // Output: number

// Rs 12345.6789
let myNumber = 12345.6749;
//.1 .2 .3 .4 .5 .6 .7 .8 .9 1
//toFixed(fractionDigits) method  : it will represent a floating point number with a fixed decimal points.
// Return a string representation of the number with a specified number of digits after the decimal point.

let fixedNumber = myNumber.toFixed(2);

// console.log(fixedNumber);
// console.log(typeof(fixedNumber)); // Output: string


// toPrecesion(precision) method : it will represent a number with a specified length. It returns a string representation of the number with the specified number of significant digits.

// let precisionNumber = myNumber.toPrecision(4); 1235 ---> 1.235 * 10^3
// console.log(precisionNumber);   
// console.log(typeof(precisionNumber)); // Output: string

// let exponentialNumber = myNumber.toExponential(2); // 1.235 * 10^4 1.23456749 * 10000   = 12345.6749
// console.log(exponentialNumber);

// Tostring() method : it will convert a number to a string and return the result.

// console.log(myNumber.toString()); // Output: "12345.6749"
// console.log(typeof(myNumber.toString())); // Output: string


/**
 * Number constructor method // Converting a string to a number
 * Number.parseInt()
 * Number.parseFloat()
 * Number.isInteger()
 * Number.isNaN()
 * Number.isFinite()
 * Number.isSafeInteger()`
 */

// Whenever you want to invoke a method from the Instance of an object those methods are called instance methods. Whenever you want to invoke a method from the class of an object those methods are called static methods.
// class student  : display(), name, age, rollNo (public) , static schoolName()
// Student student = new Student();
// student.display() : instance method
// Student.schoolName() : static method

let stringNumber = "12345.67";

// let parsedInt = Number.parseInt(stringNumber); // Output: 123

// console.log(parsedInt);
// console.log(typeof(parsedInt)); // Output: number

// let parsedFloat = Number.parseFloat(stringNumber); // Output: 12345.67
// console.log(parsedFloat);
// console.log(typeof(parsedFloat)); // Output: number

// Number.isNan(); 
// Non a Number
// Whenever we are performing a mathematical operation on a non-numeric value.

// let myString =4; //"Hello";
// let result = myString * 2; // NaN
// console.log(result); // Output: NaN
// console.log(Number.isNaN(result)); // Output: true

// IsInteger(): It checks whether is value is an integer or not.

// let myInteger = 42;
// console.log(Number.isInteger(myInteger)); // Output: true

// myInteger = "3.14";
// console.log(Number.isInteger(myInteger)); // Output: false


// Makes payment % payment is charge to the customer
// custom function with information provide by product

// Number.IsFinite(): It check whether the value is finite or not.

// let value = 10/0; // Infinity
// console.log(Number.isFinite(value)); // Output: false
// value = -10/0; // Infinity
// console.log(Number.isFinite(value));
// value = 10 /5 // finite
// console.log(Number.isFinite(value));

// Number.isSafeInteger();

// Number.Max_VALUE: The Number type that store the maxium finite value.  e.g Jar  
// Number.MIN_VALUE: The Number type that store the minimum finite value.
// Number.MAX_SAFE_INTEGER : Value That I can process with any error 
// Number.MIN_SAFE_INTEGER

// console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // Output: 5e-324

// console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991


// console.log(Number.isSafeInteger(9000000000000));