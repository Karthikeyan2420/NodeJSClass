// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating objects
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

// Both objects can use greet() from prototype
person1.greet();
person2.greet();
