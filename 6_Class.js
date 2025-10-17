// ===============================================
// 🚀 NODE.JS COMPLETE PRACTICE FILE
// Covers: Objects, JSON, Arrays, Functions, 
// Higher-Order Functions, Operators, Loops
// ===============================================

// === 1️⃣ OBJECTS ===
console.log("\n=== OBJECTS ===");

let person = {
    name: "John",
    age: 25,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("Name:", person.name);
console.log("Age:", person.age);
person.greet();

person.country = "USA"; // Add new property
console.log("Updated Object:", person);

// === 2️⃣ JSON (JavaScript Object Notation) ===
console.log("\n=== JSON ===");

let jsonData = JSON.stringify(person); // Object → JSON string
console.log("JSON String:", jsonData);

let objData = JSON.parse(jsonData); // JSON string → Object
console.log("Parsed Object:", objData);

// === 3️⃣ ARRAYS AND ARRAY FUNCTIONS ===
console.log("\n=== ARRAYS AND FUNCTIONS ===");

let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);

numbers.push(60);  // Add at end
numbers.unshift(0); // Add at start
console.log("After push & unshift:", numbers);

numbers.pop();     // Remove last
numbers.shift();   // Remove first
console.log("After pop & shift:", numbers);

console.log("Length:", numbers.length);
console.log("Index of 30:", numbers.indexOf(30));
console.log("Slice(1,3):", numbers.slice(1,3));  // Extract part
console.log("Includes 40:", numbers.includes(40));

// Map, Filter, Reduce
let doubled = numbers.map(num => num * 2);
console.log("Map (double):", doubled);

let filtered = numbers.filter(num => num > 25);
console.log("Filter (>25):", filtered);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Reduce (sum):", sum);

// === 4️⃣ FUNCTIONS ===
console.log("\n=== FUNCTIONS ===");

// Normal function
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(5, 10));

// Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Multiplication:", multiply(3, 4));

// Arrow Function
const divide = (a, b) => a / b;
console.log("Division:", divide(10, 2));

// === 5️⃣ HIGHER ORDER FUNCTION ===
console.log("\n=== HIGHER ORDER FUNCTION ===");

// Function taking another function as argument
function calculate(a, b, operation) {
    return operation(a, b);
}

function subtract(x, y) {
    return x - y;
}

let result = calculate(20, 5, subtract);
console.log("Higher Order Function (subtract):", result);

// === 6️⃣ OPERATORS ===
console.log("\n=== OPERATORS ===");

let x = 10, y = 3;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Increment:", ++x);
console.log("Decrement:", --y);

console.log("Equal (==):", x == y);
console.log("Strict Equal (===):", x === y);
console.log("Not Equal (!=):", x != y);
console.log("Greater than:", x > y);
console.log("Less than:", x < y);

console.log("Logical AND:", x > 5 && y > 1);
console.log("Logical OR:", x > 10 || y > 1);
console.log("Logical NOT:", !(x < 5));

// === 7️⃣ LOOP STATEMENTS ===
console.log("\n=== LOOPS ===");

let arr = [1, 2, 3, 4, 5];

// For loop
console.log("For loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// For...of loop
console.log("For...of loop:");
for (let value of arr) {
    console.log(value);
}

// For...in loop (for objects)
console.log("For...in loop (object):");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// While loop
console.log("While loop:");
let i = 0;
while (i < 3) {
    console.log("Count:", i);
    i++;
}

// Do...while loop
console.log("Do...While loop:");
let j = 0;
do {
    console.log("Number:", j);
    j++;
} while (j < 3);

console.log("\n=== PROGRAM END ===");
