/**
 * Object is a collection of key-value pairs
 * Object contains values at the time of declaration.
 * class is a blueprint of an object.
 *
 */

// you have purchased few items , who is actual owner of the item ?. maintaining the items is difficlt
// I can keep all the items in a box and put the name of the owner on the box.
let flag = true;
let name = "Anirudha";
let age = 25;
// Array key would always be a number and object key would always be a string.
// fruits =["Apple", "Banana", "Mango", "Grapes"];
/**
 * {
 * 0: "Apple",
 * 1: "Banana",
 * 2: "Mango",
 * 3: "Grapes"
 * }
 */
// Object literal syntax
let person = {
  name: "Anirudha",
  age: 25,
  isStudent: true,
};

// Constructor function syntax

// function Person(name, age, isStudent, totalMarks) {
//   // this --- represent the current object
//   this.name = name;
//   this.age = age;
//   this.isStudent = isStudent;
//   this.college = "ABC College";
//   this.totalMarks = totalMarks;
//   this.displayDetails = function () {
//     console.log(
//       `Name: ${this.name}, Age: ${this.age}, Is Student: ${this.isStudent}, College: ${this.college}, Total Marks: ${this.totalMarks}`,
//     );
//   };
//   this.parameterizedFunction = function (name, age, isStudent, totalMarks) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//   }
// }

let person1 = new Person("Anirudha", 25, true);
let person2 = new Person("John", 30, false);

// object['key'] --- object.key
// object.key = value; --- object['key'] = value;

console.log(person1);

person1.name = "Anirudha Kumar";
person1["age"] = 26;

console.log(person1);

person1.displayDetails();
person1.parameterizedFunction('Hitesh', 28, true, 90);
person1.displayDetails();
/**
 * function inside an object is called method.
 * let object :{
 * key: function()}
 * }
 *
 * object.key()
 */


