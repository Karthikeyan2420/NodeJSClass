// User Defined Module

// Function 1
function add(a, b) {
    return a + b;
}

// Function 2
function multiply(a, b) {
    return a * b;
}

// Function 3
const message = "Hello from User Defined Module";

// Export everything
module.exports = {
    add,
    multiply,
    message
};
