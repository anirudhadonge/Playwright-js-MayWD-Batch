/**
 * Static Keyword in JavaScript
 * The static keyword is used to define a static method or property in a class. 
 * Static
 */

/**
 * Syntax:
 * class ClassName {
 *  static <propertyName>;
 * static <methodName>() {)
 * }
 */

/**
 * Static properties can be used where all the test are access some value, the value does not change. For the whole execution those values would remain unchanged.
 * e.g. Environment details 
 * Application URL 
 * Database connection details
 * UserName and password
 */
/**
 * Utility method that need to access directly
 * Generating a random number  e.g. CommonUtil.js which a CommonUtil class 
 */



  
 let stsc = 1;
 module.exports={Student, EngineeringStudent, DisplayUtil, stsc}; // it will export the Student class, EngineeringStudent class and DisplayUtil function from this file so that we can use it in other file
//  Student.schoolName = "ABC School"; // class variable can be accessed using the class name // When the main program starts
//  // These varaible would occupy the memory space and they would be alive it the programe is running.

//  let student1 = new Student('Anirudha', 123); // Allocate a memory location for the object and the object born // afer usage of the object it get destroyed
//  // memory space is freed up by the garbage collector
//     console.log(student1); // Output: Student { name: 'Anirudha', rollNumber: 123 }
// // Output: School Name: ABC School
// Student.displaySchoolName(); // Class Method can be accessed using the class name

// let student3 = new Student('Hitesh', 124);
// console.log(student3); // Output: Student { name: 'Hitesh', rollNumber: 124 }
// Student.displaySchoolName(); 

// EngineeringStudent.schoolName = "XYZ School"; // static property is shared among all the instances of the class

// console.log(Student.schoolName); // Output: XYZ School

// let engStudent = new EngineeringStudent('Anirudha', 125, 'Computer Science');
// engStudent.setAge = 22;
// engStudent.displayDetails(); // Output: Name: Anirudha, Roll Number: 125 and Age: 22 and Branch: Computer Science and school name is XYZ School