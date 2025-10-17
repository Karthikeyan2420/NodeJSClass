// Node.js Class Example

class Person {
    // constructor() is called automatically when a new object is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method (function inside a class)
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an object (instance)
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

// Access data and methods
person1.greet();
person2.greet();
