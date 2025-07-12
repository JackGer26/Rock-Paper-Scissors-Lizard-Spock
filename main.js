// Rock Paper Scissors Game - Frontend JavaScript

// Add click event listeners to all choice buttons
document.querySelectorAll('.choice-btn').forEach(button => {
  button.addEventListener('click', function() {
    
    // Get player's choice from the clicked button
    const playerChoice = this.getAttribute('data-choice');
    
    // Send player choice to server
    fetch(`/api?player=${playerChoice}`)
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        // Display game results
        document.getElementById('result').textContent =
          `You chose ${data.player}. Result: ${data.result.toUpperCase()}!`;
        
        // Show server's choice (capitalized)
        document.getElementById('serverChoice').textContent =
          `${data.server.charAt(0).toUpperCase() + data.server.slice(1)}`;
        
        // Display winner message
        document.getElementById('winner').textContent =
          data.result === 'win' ? 'You Win!' :
          data.result === 'lose' ? 'You Lose!' :
          data.result === 'draw' ? "It's a Draw!" : '';
      })
      .catch(err => {
        // Handle errors
        document.getElementById('result').textContent = 'Error contacting server.';
        document.getElementById('serverChoice').textContent = '';
        document.getElementById('winner').textContent = '';
      });
  });
});