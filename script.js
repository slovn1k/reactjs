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