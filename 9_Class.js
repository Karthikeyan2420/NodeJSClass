console.log("=== Error Handling Example ===");

try {
    // Code that may throw an error
    let result = 10 / 0;   // This is actually fine in JS (returns Infinity)
    let obj = undefined;
    console.log(obj.name); // This will throw TypeError
} catch (error) {
    console.log("An error occurred!");
    console.log("Error message:", error.message);
    console.log("Error type:", error.name);
} finally {
    console.log("Finally block always runs!");
}

console.log("Program continues...");
