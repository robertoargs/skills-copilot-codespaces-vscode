// 1. Create server
// 2. Create a route for /comments
// 3. Read the comments.json file and send it as a response
// 4. Listen on port 3000

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Run the server by running the following command in the terminal:
// node comments.js
// Open http://localhost:3000/comments in your browser to see the comments.json file as a response. If you open any other route, you will see Page not found as a response.
// You can test the server by sending a GET request to http://localhost:3000/comments using a tool like Postman or cURL.
// If you want to stop the server, you can press Ctrl + C in the terminal.