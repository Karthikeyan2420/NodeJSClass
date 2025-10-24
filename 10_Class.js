console.log("=== Node.js Globals ===");

// __dirname and __filename
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);

// module and exports
console.log("module.id:", module.id);
console.log("module.filename:", module.filename);

// process object
console.log("process.platform:", process.platform);
console.log("process.version:", process.version);
console.log("process.cwd():", process.cwd());

// Accessing global object
global.myVar = "I am global!";
console.log("global.myVar:", global.myVar);

// Using require to import a built-in module
const os = require('os');
console.log("OS platform:", os.platform());
console.log("OS free memory:", os.freemem());
