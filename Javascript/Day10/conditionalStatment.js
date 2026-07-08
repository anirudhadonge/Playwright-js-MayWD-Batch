/**
 * if-else
 * switch-case
 * ternary operator
 */

// Operators 
// == : checks for value equality (type coercion is allowed) ,not the type of the variable
// === : checks for value and type equality (type coercion is not allowed)
// !=: not equal to
// !==
// , 
// >,
// <,
// >=,
// <=
// Logical Operators: &&, ||, !


/**
 * if(condition(true/false)){
 *   // action that need to be performed if condition is true
 * }
 * 
 */



// if(age === expectedAge) { // value and type check (16 is equal to 1)
//   console.log("You are eligible to vote. and also you can drive a car");
// } 
// && and operator - both the conditions should be true for the overall condition to be true
// || or operator - at least one condition should be true for the overall condition to be true

// condition1, condition2, condition3

/**
 * if((condition1 && condition2) || condition3){
 *  // action to be performed if the condition is true
 * }
 */

// if(age == expectedAge || typeof(age) == typeof(expectedAge)){
//     console.log("You are eligible to vote. and also you can drive a car");
// } // value check only (16 is equal to 1)

// > : greater than, (value2>value1)
// <: less than, (value1<value2)
// >=: greater than or equal to, (value2>=value1)  (value2>value1 or value2==value1)
// <=: less than or equal to (value1<=value2) (value1<value2 or value1==value2)

// if - else statement
// /**
//  * if(condition){
//  * } else {
//  *  // action to be performed if the condition is false
//  * }
//  * 
//  * 
//  * /
 

/**
 * syntax of else if statement
 * if(condition1){
 *  // action to be performed if condition1 is true
 * } else if(condition2){
 *  // action to be performed if condition2 is true
 * } else {
 *  // action to be performed if all the above conditions are false
 * }
 */

// let age = 1;

// if(age > 5){
//     console.log("you can use the actual swimming pool");
// } else if (age >= 2 && age <=5) {
//     console.log("you can use the baby pool");
// } else if (age <2){
//     console.log("you are not allowed to use the pool");
// } else{
//     console.log("you can use the senior pool");
// }

// ternary operator (if else in one line)
// condition ? action to be performed if condition is true : action to be performed if condition is false


let age = 19;//number
let expectedAge = 18; //string

// if(age >= expectedAge){
//     console.log("You are eligible to vote. and also you can drive a car");
// } else {
//     console.log("You are not eligible to vote. and also you cannot drive a car");
// }

(age >= expectedAge) ? console.log("You are eligible to vote") : console.log("You are not eligible to vote.");