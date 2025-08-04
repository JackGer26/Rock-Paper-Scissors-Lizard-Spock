# Rock Paper Scissors Lizard Spock

This is a full-stack web application developed as a collaborative mini-project that implements the classic Rock Paper Scissors game with the added complexity of Lizard and Spock (popularized by The Big Bang Theory). Players can make their choice by clicking buttons, and the server responds with its own choice and determines the winner.

**Link to Project:** https://rock-paper-lizard-9884d45a57bc.herokuapp.com/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

Our team built this as a full-stack application with a Node.js backend server handling game logic and a vanilla JavaScript frontend for user interaction. The key features of our implementation are its client-server architecture, RESTful API design, comprehensive game logic, and real-time feedback to users.

The backend server was built using Node.js with the built-in `http` module. Our team designed the server to handle multiple routes: serving static files (HTML, CSS, JavaScript), processing game API requests, and providing 404 error pages with ASCII art using the `figlet` library. When a player makes a choice, the server generates a random choice for itself and determines the winner using predefined game rules.

We implemented the frontend using vanilla JavaScript with event listeners attached to all choice buttons using `document.querySelectorAll('.choice-btn')`. When a button is clicked, the player's choice is extracted from the button's `data-choice` attribute and sent to the server via a fetch API call. The server responds with JSON data containing the player's choice, server's choice, and game result.

Our team implemented the expanded Rock Paper Scissors Lizard Spock rules where each choice beats exactly two other choices: Rock crushes Scissors and Lizard, Paper covers Rock and disproves Spock, Scissors cuts Paper and decapitates Lizard, Lizard eats Paper and poisons Spock, and Spock vaporizes Rock and smashes Scissors. This is handled through a `winsAgainst` object that maps each choice to an array of choices it defeats.

The frontend dynamically updates three separate DOM elements: the main result display showing what the player chose and the outcome, the server's choice with proper capitalization, and a winner message using ternary operators to display "You Win!", "You Lose!", or "It's a Draw!". We implemented error handling on both client and server sides to manage network issues or invalid requests.

## Optimizations

The first optimization our team implemented was considering event delegation by attaching a single event listener to a parent element rather than individual listeners to each button. However, we decided to use `querySelectorAll` with `forEach` to attach listeners to each button directly, which is still efficient for a small number of buttons and provides clear, readable code.

We designed the server-side game logic using an object-based approach for determining winners rather than a long series of if-else statements. The `winsAgainst` object provides O(1) lookup time for determining if a player's choice beats the server's choice, making our code both more efficient and more maintainable.

Our team implemented proper error handling on both the frontend and backend. The frontend `.catch()` method handles network errors gracefully by displaying an error message and clearing previous results. The server validates that a player choice was provided before processing the game logic and returns appropriate HTTP status codes (200 for success, 400 for bad requests, 404 for not found).

We ensured the server uses proper HTTP headers and content types for different file types (text/html, text/css, text/javascript, application/json) ensuring browsers handle the responses correctly. Our API returns structured JSON data that's easy to parse and use on the frontend.

String manipulation is handled efficiently on the frontend using `charAt(0).toUpperCase() + slice(1)` for capitalizing the server's choice, and `toUpperCase()` for emphasizing the game result. These optimizations ensure consistent formatting without unnecessary complexity.

## Lessons Learned:

Working on this full-stack application as a team reinforced the importance of separation of concerns between frontend and backend code. Our group decided that the server should handle game logic and data processing while the frontend focuses solely on user interaction and display updates. This architecture made our code more maintainable and allowed for easier testing and debugging of individual components.

The project emphasized the value of using native Node.js modules for simple applications. Rather than using a framework like Express, our team chose to work with the built-in `http`, `fs`, and `url` modules which provided all necessary functionality while keeping dependencies minimal. This approach gave us a deeper understanding of how web servers work at a fundamental level.

API design became crucial in our collaborative development process. Creating a simple, RESTful endpoint (`/api?player=rock`) that returns consistent JSON responses made the frontend implementation straightforward for all team members. Our API's predictable structure with `player`, `server`, and `result` properties allowed for clean, readable frontend code.

In summary, this mini-project provided our team with practical experience in client-server communication, RESTful API design, asynchronous JavaScript with fetch requests, and the importance of proper error handling in full-stack applications. The modular approach to game logic and clear separation between presentation and business logic created a maintainable and extensible codebase that all team members could easily understand and contribute to.
