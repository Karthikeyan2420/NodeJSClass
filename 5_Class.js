// Load the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // status code + header
    res.end('Hello, this is my first Node.js Server!');
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
