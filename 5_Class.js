/* // Load the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // status code + header
    res.end('Hello, this is my first Node.js Server!');
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); */


// Load the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    const url = req.url;

    // 1. 200 OK - TEXT
    if (url === '/text') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('This is plain text with Status 200 OK');
    }

    // 2. 200 OK - JSON
    else if (url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: "This is JSON with Status 200 OK" }));
    }

    // 3. 200 OK - HTML
    else if (url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <body>
                    <h1>200 OK - HTML Response</h1>
                    <p>This is HTML content from Node.js</p>
                </body>
            </html>
        `);
    }

    // 4. 500 INTERNAL SERVER ERROR
    else if (url === '/error') {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('500 Internal Server Error (example)');
    }

    // 5. 404 NOT FOUND
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

