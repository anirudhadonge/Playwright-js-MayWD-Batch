/**
 * Class : Template using which we create a object.
 * Javacript is not an Object Oriented Programming language but it supports OOP concepts.
 * Class is just a representation of the non primitive data type i.e. Object (you can create a template using function constructor)
 * Class(keyword) className{
 *  // properties: we directly declare the variable without using var, let or const keyword
 *  // constructor : we use the constructor keyword to declare a constructor function. Constructor cannot be overloaded in javascript. 
 * A class can have only one constructor function.
 * // methods}
 * Access modifiers in javascript
 * Public : it can be accessed from anywhere
 * Private : it can be accessed only within the class
 * Protected : it can be accessed within the class and its subclasses
 */
/**
 * declaring properties
 * Methods
 * Inheritance:  parent ----> child 
 * Polymorphism : Poly mean many and morph mean form. // same name but different implementation. // Method Overriding;
 * static keyword
 * super keyword
 * this keyword
 * getter and setter : set and get keywords are used to declare getter and setter methods. We can use getter and setter methods to access private properties of a class.
 */

 class Student {
    #age; // private property
    constructor(name, rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }

    addNewProperty(age){ // all the concepts of function are applicable to methods as well
        this.#age = age;
    }

    set  setAge(age){ // setter method
        this.#age = age;
    }

    get getAge(){ // getter method
        return this.#age;
    }
    
    displayDetails(){
        console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber} and Age: ${this.#age}`);
        
    }


 }

 class EngineeringStudent extends Student{
    constructor(name, rollNumber, branch){
      super(name, rollNumber); // calling the constructor of the parent class
      this.branch = branch;
    }

    getSubjects(){
        return ['Eng-Maths', 'Networking', 'Data Structures'];
    }

    displayDetails(){
        console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber} and Age: ${this.getAge} and Branch: ${this.branch}`);
        super.displayDetails(); // calling the method of the parent class
    }
 }

// function Student(name, rollNumber){
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.addNewProperty = function(age){
//         this.age = age;
//     }
// }

//  let student1 = new Student('Anirudha', 123);
// console.log(student1); // Output: Student { name: 'Anirudha', rollNumber: 123 }
// student1.name ="Hitesh";
// student1.addNewProperty(22);
// console.log(student1.getAge); // Output: 22
// student1.setAge = 21;
// console.log(student1.getAge); // Output: 21
// console.log(student1); // Output: Student { name: 'Hitesh', rollNumber: 123 }

// function Student(name, rollNumber){
//     this.name = name;
//     this.rollNumber = rollNumber;
// }

let student1 = new Student("Anirudha", 123);
//console.log(student1); // Output: Student { name: 'Anirudha', rollNumber: 123 }
student1.setAge = 22;
student1.displayDetails();

let engStudent = new EngineeringStudent("Anirudha", 123,'Computer Science');
//console.log(engStudent); // Output: EngineeringStudent { name: 'Anirudha', rollNumber: 123 }
engStudent.setAge = 18;
//console.log(engStudent.getSubjects()); // Output: [ 'Eng-Maths', 'Networking', 'Data Structures' ]  
engStudent.displayDetails();