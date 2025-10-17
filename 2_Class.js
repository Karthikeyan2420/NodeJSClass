console.log("this is new message")


// ===============================
// Node.js: Numbers and Booleans
// ===============================

// ---- Numbers ----
console.log("=== NUMBERS ===");

let a = 10;
let b = 3.5;
let c = "25.7";

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

// Type check
console.log("Type of a:", typeof a);

// --- Number Conversions ---
console.log("Number(c):", Number(c));      // Convert string to number
console.log("parseInt(c):", parseInt(c));  // Convert to integer
console.log("parseFloat(c):", parseFloat(c)); // Convert to float

// --- Math Functions ---
console.log("Math.round(b):", Math.round(b));   // Round to nearest integer
console.log("Math.floor(b):", Math.floor(b));   // Round down
console.log("Math.ceil(b):", Math.ceil(b));     // Round up
console.log("Math.random():", Math.random());   // Random number (0–1)
console.log("a toFixed(2):", a.toFixed(2));     // Fix decimal points

// --- Checking NaN (Not a Number) ---
console.log("isNaN('Hello'):", isNaN("Hello")); // true
console.log("isNaN(123):", isNaN(123));         // false

console.log("\n=== BOOLEANS ===");

// ---- Booleans ----
let x = true;
let y = false;
let z = 10 > 5;

console.log("x =", x);
console.log("y =", y);
console.log("z (10 > 5) =", z);

// --- Boolean Conversions ---
console.log("Boolean(0):", Boolean(0));           // false
console.log("Boolean(1):", Boolean(1));           // true
console.log("Boolean('Hello'):", Boolean("Hello"));// true
console.log("Boolean(''):", Boolean(""));          // false

// --- Logical Operators ---
console.log("true && false =", true && false);    // AND
console.log("true || false =", true || false);    // OR
console.log("!true =", !true);                    // NOT

// --- Equality Checks ---
console.log("5 == '5' :", 5 == "5");   // true (loose equality)
console.log("5 === '5' :", 5 === "5"); // false (strict equality)

// Type check
console.log("Type of x:", typeof x);

console.log("\n=== PROGRAM END ===");
