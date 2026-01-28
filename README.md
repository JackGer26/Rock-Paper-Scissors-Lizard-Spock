# Rock Paper Scissors Lizard Spock
A full-stack web application developed as a collaborative mini-project that implements the classic Rock Paper Scissors game with the added complexity of Lizard and Spock (popularized by The Big Bang Theory). Players can make their choice by clicking buttons, and the server responds with its own choice and determines the winner.

![Rock Paper Scissors Lizard Spock Screenshot](./images/app-screenshot.png)

Link to project: https://rock-paper-scissors-lizard-spock-kb42.onrender.com

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, Node.js

This application was built as a full-stack project with a Node.js backend server handling game logic and a vanilla JavaScript frontend for user interaction. The key features include client-server architecture, RESTful API design, comprehensive game logic, and real-time feedback to users.

The backend server was built using Node.js with the built-in http module. The server handles multiple routes: serving static files (HTML, CSS, JavaScript), processing game API requests, and providing 404 error pages with ASCII art using the figlet library. When a player makes a choice, the server generates a random choice and determines the winner using predefined game rules.

The frontend uses vanilla JavaScript with event listeners attached to all choice buttons. When clicked, the player's choice is sent to the server via a fetch API call. The server responds with JSON data containing the player's choice, server's choice, and game result.

The expanded Rock Paper Scissors Lizard Spock rules are implemented where each choice beats exactly two other choices. This is handled through a winsAgainst object that maps each choice to an array of choices it defeats. Loading states provide immediate user feedback during server communication.

## Optimizations
Implemented an object-based approach for determining winners rather than long if-else statements. The winsAgainst object provides O(1) lookup time for determining if a player's choice beats the server's choice, making the code both more efficient and maintainable.

Added proper error handling on both frontend and backend. The frontend .catch() method handles network errors gracefully by displaying error messages and clearing previous results. The server validates player choices and returns appropriate HTTP status codes.

Implemented loading states ("Making your move..." and "Thinking...") to provide immediate feedback during server communication, especially important for hosted applications that may have cold start delays. String manipulation is handled efficiently for consistent formatting.

## Lessons Learned:
**Client-Server Communication** - Working on this full-stack application reinforced the importance of separation of concerns between frontend and backend code. The server handles game logic and data processing while the frontend focuses solely on user interaction and display updates.

**Native Node.js Development** - Rather than using a framework like Express, working with the built-in http, fs, and url modules provided all necessary functionality while keeping dependencies minimal. This approach gave deeper understanding of how web servers work at a fundamental level.

**API Design** - Creating a simple, RESTful endpoint (/api?player=rock) that returns consistent JSON responses made the frontend implementation straightforward. The API's predictable structure with player, server, and result properties allowed for clean, readable frontend code.

**Error Handling** - Implementing proper error handling in full-stack applications taught the importance of graceful degradation and user feedback. Understanding how to handle network issues, server errors, and invalid requests was essential for creating a robust user experience.

## Future Improvements
Add a score tracker to keep track of wins and losses across multiple games. Include simple sound effects for wins, losses, and draws.

Implement a "best of 5" or "best of 10" game mode. Add basic animations when choices are revealed. Include a reset button to clear the game history and start fresh.

## Examples of Other Work
- **[Binary Upload Boom](https://github.com/JackGer26/binary-upload-boom)** - Full-stack social media application with authentication and image uploads
- **[Movie Watchlist Tracker](https://github.com/JackGer26/MVC-Passport-Movie-App)** - MVC application with Passport.js authentication and MongoDB
- **[Green Cars Airport Transfers](https://github.com/JackGer26/Green-Cars-Airport-Transfers)** - Professional business website built for a real client