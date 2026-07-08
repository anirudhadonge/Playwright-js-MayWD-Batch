/**
 * Function is a reusable block of code. Enclosing a action (that can we reused) in side a scope.
 */

/**
 * There are three way you can declare a function
 * 1. function <functionName>(<parameters>){<body>}
 * 2. let <Variablename> = function (<parameters){<body>}
 * 3. Arrow Function :  (Parameters) => {<body>} // Anonmous function
 */

/** common features 
 * 
 * Parameters or Arguments
 * return value
 * Array Function : Anonymous Functions
 * Default parameters value 
 * 
*/


function display(){
    console.log("I am learning Function in javascript");
}

console.log(typeof display);


// function addToNumber(num1=5,num2=7){
//     //console.log(num1+num2);
//     return num1+num2;
// }

// console.log(addToNumber());

//console.log(addToNumber(7));

// let addTwoNumber = function (num1, num2){
//     return num1+num2;
// }


// console.log(addTwoNumber(5,6));

// setTimeout(action(implementation), timeout)
/**
 * I am learning Function in javascript
 * after 3000
 */
// console.log('Before Set Time out');
// setTimeout(()=>{console.log("I am learning Function in javascript")},7000);
// console.log('After Set Time out');


// function fun(fun1){
//     this.name = "Anirudha";
//     console.log("I am inside fun function");
//     fun1();
// }


// fun(()=>{
//     console.log("I am inside fun1 function");
// })


function add(num1, num2){
    return num1+num2;
}

function add(num1, num2, num3){
    return num1+num2+num3;
}

console.log(add(5,6)); // Output: NaN