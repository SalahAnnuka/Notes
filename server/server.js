const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Check if the request is for the '/api/notes' endpoint
    if (req.url === '/api/notes' && req.method === 'GET') {
        // Read the JSON data from a file (assuming data.json is in the same directory)
        fs.readFile('data.json', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            // Parse the JSON data and send it as the response
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        });
    } else {
        // If the requested endpoint is not found, return a 404 Not Found response
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
