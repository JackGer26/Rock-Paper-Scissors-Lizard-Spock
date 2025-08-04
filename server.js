// Rock Paper Scissors Game - Backend Server

// Import required Node.js modules
const http = require('http');        // Creates HTTP server
const fs = require('fs');           // File system operations
const url = require('url');         // URL parsing
const querystring = require('querystring'); // Parse query parameters
const figlet = require('figlet');   // ASCII art for 404 errors

// Create HTTP server that handles all requests
const server = http.createServer((req, res) => {
  // Parse the requested URL path and query parameters
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  // Route: Serve the main HTML page
  if (page === '/') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // Route: Serve CSS stylesheet
  else if (page === '/css/style.css') {
    fs.readFile('css/style.css', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  // Route: Serve JavaScript file
  else if (page === '/js/main.js') {
    fs.readFile('js/main.js', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  // Route: Handle game API requests
  else if (page === '/api') {
    // Check if player choice was provided in query parameters
    if ('player' in params) {
      // Define available game choices
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      const playerChoice = params['player'].toLowerCase();
      
      // Generate random choice for server
      const serverChoice = choices[Math.floor(Math.random() * choices.length)];
      console.log('Server chose:', serverChoice);

      // Define what each choice beats (Rock Paper Scissors Lizard Spock rules)
      const winsAgainst = {
        rock:     ['scissors', 'lizard'],
        paper:    ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard:   ['spock', 'paper'],
        spock:    ['scissors', 'rock']
      };

      // Determine game result
      let result = '';
      if (playerChoice === serverChoice) {
        result = 'draw';  // Same choice = tie
      } else if (winsAgainst[playerChoice] && winsAgainst[playerChoice].includes(serverChoice)) {
        result = 'win';   // Player's choice beats server's choice
      } else if (choices.includes(playerChoice)) {
        result = 'lose';  // Valid choice but player loses
      } else {
        result = 'invalid'; // Invalid choice
      }

      // Send game results as JSON
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({
        player: playerChoice,
        server: serverChoice,
        result: result
      }));
    } else {
      // Error: No player choice provided
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: 'No player choice provided.' }));
    }
  }
  // Route: Handle 404 errors for unknown pages
  else {
    figlet('404!!', (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write(data);
      res.end();
    });
  }
});

// Start server on port assigned by Heroku or default to 8000 for local development
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
