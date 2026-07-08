// let max = 100;
// let min = 1;
// // Math.random() == 0.0000000000001 * 99 == 0.0000000000001
// console.log(Math.floor(Math.random() * (max - min) + 1)); // Output: A random number between 0 (inclusive) and 1 (exclusive)


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(getRandomNumber(1, 100)); // Output: A random number between 1 and 100 (inclusive)
console.log(getRandomNumber(50, 150)); // Output: A random number between 50 and 150 (inclusive)    
