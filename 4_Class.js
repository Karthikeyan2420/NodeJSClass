// Simple callback example

function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // calling the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

// pass 'sayBye' as callback
greet("John", sayBye);
