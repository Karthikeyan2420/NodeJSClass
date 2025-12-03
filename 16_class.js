const fs = require("fs");

// Create a read stream (reads data from file)
const readStream = fs.createReadStream("input.txt", "utf8");

// Create a write stream (writes data to file)
const writeStream = fs.createWriteStream("output.txt");

// Read → Write using events
readStream.on("data", (chunk) => {
    console.log("Reading Chunk:");
    console.log(chunk);
    writeStream.write(chunk); // writing data
});

// When reading is finished
readStream.on("end", () => {
    console.log("Finished Reading File!");
});

// Handle errors
readStream.on("error", (err) => console.log("Error:", err));
writeStream.on("error", (err) => console.log("Error:", err));
