/*************************************************************
 *  NODE.JS MODULE SYSTEM & REQUIRE()
 *************************************************************/

// Importing Core & External Modules
const fs = require("fs");        // File System
const path = require("path");    // Path Module
const os = require("os");        // OS Module
const util = require("util");    // Util Module
const bcrypt = require("bcrypt"); // Bcrypt (for hashing passwords)


/*************************************************************
 *  FILE SYSTEM (fs)
 *  Create, Read, Update, Delete files
 *************************************************************/

// File path using path module
const filePath = path.join(__dirname, "data.txt");

// CREATE FILE
fs.writeFileSync(filePath, "Hello, this is Node.js File System Example!\n");

// READ FILE
const fileContent = fs.readFileSync(filePath, "utf8");
console.log("\n📄 File Content:");
console.log(fileContent);

// UPDATE FILE (Append data)
fs.appendFileSync(filePath, "Appending new data to file.\n");

// READ AGAIN
console.log("\n📄 Updated File Content:");
console.log(fs.readFileSync(filePath, "utf8"));

// DELETE FILE (Uncomment to delete file)
// fs.unlinkSync(filePath);


/*************************************************************
 *  PATH MODULE
 *************************************************************/
console.log("\n📌 Path Details:");
console.log("Directory Name:", __dirname);
console.log("File Name:", __filename);
console.log("Base Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Join Example:", path.join("folder", "subfolder", "file.txt"));


/*************************************************************
 *  OS MODULE
 *************************************************************/
console.log("\n🖥️ OS Information:");
console.log("CPU:", os.cpus().length, "cores");
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Platform:", os.platform());
console.log("Home Directory:", os.homedir());






/*************************************************************
 *  BCRYPT MODULE
 *  Hash and Compare Passwords
 *************************************************************/
async function bcryptExample() {
    const password = "mySecret123";

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("\n🔐 Hashed Password:");
    console.log(hashedPassword);

    // Compare
    const match = await bcrypt.compare(password, hashedPassword);
    console.log("\n🔍 Password Match:", match);
}

bcryptExample();
