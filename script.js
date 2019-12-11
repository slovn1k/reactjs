// Declaring variables and constants
let hello = "hello world"; // new method of declaring variables, old one is var
const helloWorld = "Constant"; // here we declare a constant
console.log(hello + " " + helloWorld);

// Arrow functions
// this is a simple function
// function printMyName(name) {
//     console.log(name);
// }

// this is an arrow function
const printMyName = (name, age) => { // here we use paratheses because there are multiple parameters
    console.log(name + " " + age);
}

printMyName("Alex", 27);

// Classes
class Human { // here we are declaring a class
    constructor() { // here we are declaring a consturctor
        this.gender = "male"; // here are constructor properties
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human { // here we extend on class with another
    constructor() {
        super(); // this must be called for extension to work
        this.name = "Alex";
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();