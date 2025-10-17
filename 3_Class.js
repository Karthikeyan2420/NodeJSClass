// ==============================
// Node.js: Strings and Functions
// ==============================

let str = "  Hello Node.js World!  ";
let name = "John";

// Display string
console.log("Original String:", str);

// --- String Properties ---
console.log("Length:", str.length); // Number of characters

// --- Case Conversion ---
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// --- Trimming spaces ---
console.log("Trim:", str.trim()); // Removes spaces from both sides

// --- Searching & Indexing ---
console.log("Index of 'Node':", str.indexOf("Node"));  // Find position
console.log("Includes 'World':", str.includes("World")); // true/false
console.log("Starts with 'Hello':", str.startsWith("Hello")); // false (has spaces)
console.log("Ends with '!':", str.endsWith("!")); // false (has spaces)

// --- Extracting parts ---
console.log("Slice(2, 7):", str.slice(2, 7));   // Extracts substring
console.log("Substring(2, 7):", str.substring(2, 7)); // Similar to slice
console.log("Substr(2, 5):", str.substr(2, 5)); // From position, length

// --- Replace & Split ---
console.log("Replace 'Node.js' with 'JavaScript':", str.replace("Node.js", "JavaScript"));
console.log("Split by space:", str.split(" ")); // Convert to array

// --- Concatenation ---
console.log("Concatenation:", str.trim().concat(" by ", name));

// --- Template Literals ---
console.log(`Welcome ${name}! Today we learn ${"Strings"}.`);

// --- Character Access ---
console.log("Character at position 2:", str.charAt(2));
console.log("Character code of position 2:", str.charCodeAt(2));

// --- Repeat ---
console.log("Repeat 3 times:", name.repeat(3));

// --- Check Type ---
console.log("Type of str:", typeof str);

console.log("\n=== PROGRAM END ===");
