'use strict';

function fetchDadJoke() {
  fetch('https://icanhazdadjoke.com/', {
      headers: {
          Accept: 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {
      console.log(response);
      displayJoke(response.joke);
  })
  .catch(error => {
      console.error('Error fetching dad joke:', error);
      displayJoke('Failed to load a dad joke.');
  });
}

function displayJoke(joke) {
  document.getElementById('jokeContainer').textContent = joke;
}

fetchDadJoke();