/**
 * any Integer or Decimal number is a Number in JavaScript.
 */

// Method that can be invoked using the number type

/** convert number to string. They called using the number variable followed by a dot and the method name. For example:
 * 1. toFixed(digits): Returns a string representing the number in fixed-point notation, rounded to the specified number of digits after the decimal point.
 * 2. toExponential(digits): Returns a string representing the number in exponential notation, rounded to the specified number of digits after the decimal point.
 * 3. toPrecision(precision): Returns a string representing the number to a specified precision in fixed-point or exponential notation, depending on the value and the precision.
 * 4. toString(): Returns a string representing the number.

 */


let num = 123456.8976; // 1.2*10^2 == 120 or 1.2e+2
// let fixedNum = num.toFixed(2); // Rounds to 2 decimal places
// console.log(fixedNum);
// console.log(typeof(fixedNum)); // Output: string


// console.log(num.toPrecision(3));

//console.log(num.toExponential(3)); // Output: "1.23e+5"

// console.log(num.toString()); // Output

// Method and properties called from Number object 
/** 1. MAX_VALUE: Represents the largest positive finite value that can be represented in JavaScript.
 * 2. MIN_VALUE: Represents the smallest positive finite value that can be represented in JavaScript.
 * 3. NaN: Represents a value that is "Not-a-Number". It is the result of an invalid or undefined mathematical operation, such as dividing zero by zero or taking the square root of a negative number.
 * 4. isNaN(value): A static method that determines whether a value is NaN (Not-a-Number). It returns true if the value is NaN, and false otherwise.
 * 5. isFinite(value): A static method that determines whether a value is a finite number. It returns true if the value is a finite number, and false if it is NaN, positive infinity, or negative infinity.
 * 6. parseInt(string, radix): A static method that parses a string argument and returns an integer of the specified radix (base). The radix can be an integer between 2 and 36. If the radix is not provided, it defaults to 10 (decimal).
 * 7. parseFloat(string): A static method that parses a string argument and returns a floating-point number. It reads the string until it encounters a character that is not a valid part of a number, and then returns the number parsed up to that point.
 * 8. MIN_SAFE_INTEGER: Represents the minimum safe integer in JavaScript, which is -(2^53 - 1).
 * 9. MAX_SAFE_INTEGER: Represents the maximum safe integer in JavaScript, which is 2^53 - 1.
 * */

// // Jar which can store 5 lts of water and min storage in 500 min
// console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // Output: 5e-324

// // Jar can process the water with any error 
// console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER)

// NAN : not a number
// Whenever we are trying to perform a mathematical action on a non number. Javascript a message stating NAN

// console.log(Number.isNaN(10/10));


//IsFinite(): Infinite and finite

// Number has a finite value , then Isfinite method returned true. If the value is Infinite then it returns false


// console.log(Number.isFinite(10/3));
// console.log(Number.isFinite(10/0));


let myNumString = "25.098hitesth";

let parseInt = Number.parseInt(myNumString);

console.log(parseInt);
console.log(typeof(parseInt));


let parseFloat = Number.parseFloat(myNumString);

console.log(parseFloat);
console.log(typeof(parseFloat));