

const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "demo.txt");

// Utility: check if file exists
async function fileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

// CREATE
async function createFile() {
  if (await fileExists(FILE_PATH)) {
    console.log("File already exists. Skipping CREATE.");
    return;
  }
  await fs.writeFile(FILE_PATH, "Hello, this is a demo file!\n", "utf8");
  console.log("CREATE: File created.");
}

// READ
async function readFileData() {
  if (!(await fileExists(FILE_PATH))) {
    console.log("READ FAILED: File does not exist.");
    return;
  }
  const data = await fs.readFile(FILE_PATH, "utf8");
  console.log("READ:\n" + data);
}

// UPDATE
async function updateFile() {
  if (!(await fileExists(FILE_PATH))) {
    console.log("UPDATE FAILED: File does not exist.");
    return;
  }
  await fs.appendFile(FILE_PATH, "Appended line.\n", "utf8");
  console.log("UPDATE: File updated (line appended).");
}

// DELETE
async function deleteFile() {
  if (!(await fileExists(FILE_PATH))) {
    console.log("DELETE FAILED: File does not exist.");
    return;
  }
  await fs.unlink(FILE_PATH);
  console.log("DELETE: File removed.");
}

// MAIN: Run CRUD demo in order
async function main() {
  console.log("\n=== Basic Node.js File CRUD Demo ===\n");

  await createFile();
  await readFileData();
  await updateFile();
  await readFileData();
  //await deleteFile();

  console.log("\n=== Demo Complete ===\n");
}

main().catch(err => console.error(err));
