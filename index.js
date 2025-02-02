const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// How to run
//1. open powershell
//2. nodemon index


// Serve static files from the htmlcode directory
app.use(express.static(path.join(__dirname, 'htmlcode')));

// Basic route that sends "Hello, World!" response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

let votes = {};

app.get('/poll', (req, res) => {
  const genre = req.query.genre;

  if (!genre) {
    return res.status(400).send('Genre parameter is required');
  }

  votes[genre] = (votes[genre] || 0) + 1;

  res.json(votes); // Send the entire voting object as JSON
});


// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
