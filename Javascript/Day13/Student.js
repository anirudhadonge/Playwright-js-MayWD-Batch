class Student {
    #age; // private property
    static schoolName ; // static property
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

    static displaySchoolName(){
        console.log(`School Name: ${this.schoolName}`);
    }


 }

 module.exports={Student}; // it will export the Student class from this file so that we can use it in other file