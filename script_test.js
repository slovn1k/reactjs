class Human {
    constructor() {
        this.gender = "male";
    }

    printGender() {
        console.log(this.gender);
    }
} 

class Person extends Human {
    constructor() {
        super();
        this.name = "Alex";
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printGender();
person.printName();