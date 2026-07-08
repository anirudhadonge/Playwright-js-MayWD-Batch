const { Student } = require('./Student'); // it will import the Student class from the Student.js file
class EngineeringStudent extends Student{

    constructor(name, rollNumber, branch){
      //super(name, rollNumber); // calling the constructor of the parent class
      student1 = new Student(name, rollNumber);
      this.branch = branch;
    }

    getSubjects(){
        return ['Eng-Maths', 'Networking', 'Data Structures'];
    }

    displayDetails(){
        console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber} and Age: ${this.getAge} and Branch: ${this.branch} and school name of Student is ${Student.schoolName} and school name of Engg Student is ${EngineeringStudent.schoolName} `);
        super.displayDetails(); // calling the method of the parent class
    }
 }

 function DisplayUtil(){
    console.log("This is a utility function");
 }

 module.exports={EngineeringStudent}; // it will export the Student class, EngineeringStudent class and Display