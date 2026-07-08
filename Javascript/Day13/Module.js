/**
 * we create a class and used in inside the same file.
 * Create class or Method in one file and use it in other file.
 * 
 * 1. Commonjs : it is older way of creating modules.
 * Keywork used : module.exports = {modules(class,function , variable) to be exported}
 * require(): it will import modules from other file. we specify the path the file.
 * 2. ES Modules: 
 *    a. Default Export
 *    b. Named Export
 */
// let {Student} = require('./StaticKeyword'); // it will import the Student class from the StaticKeyword.js file
// let {EngineeringStudent} = require('./StaticKeyword'); // it will import the EngineeringStudent class from the StaticKeyword.js file
// let {DisplayUtil} = require('./StaticKeyword'); // it will import the DisplayUtil function from the StaticKeyword.js file   
// let {stsc} = require('./StaticKeyword'); // it will import the stsc variable from the StaticKeyword.js file
// console.log(stsc); // Output: 1
// let student1 = new Student("Anirudha", 101);
// console.log(student1); // Output: Student { name: 'Anirudha', rollNumber: 101 }
const { EngineeringStudent } = require('./EnggStudent'); // it will import the EngineeringStudent class from the EnggStudent.js file
const { Student } = require('./Student'); // it will import the DisplayUtil function from the StaticKeyword.js file
let enggStudent1 = new EngineeringStudent("Hitesh", 102, "Computer Science");
console.log(enggStudent1); // Output: EngineeringStudent { name: 'Hitesh', rollNumber: 102, branch: 'Computer Science' }

// DisplayUtil(); // Output: This is a utility function

let student2 = new Student("Anirudha", 123);
console.log(student2); // Output: Student { name: 'Anirudha', rollNumber: 123 }

