// Importing user defined module
const math = require("./modules/math");

// Using module functions
console.log("Addition:", math.add(10, 20));
console.log("Multiplication:", math.multiply(5, 6));

// Using exported variable
console.log("Message:", math.message);
