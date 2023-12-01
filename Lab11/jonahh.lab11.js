'use strict'

const api_url = "https://www.googleapis.com/books/v1/volumes?q=$(apiQuery)";

function Search() {
    fetch('https://icanhazdadjoke.com/', {
    headers: {
        Accept: 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        displayBook(response.joke);
    })
    .catch(error => {
        console.error('Error fetching book:', error);
        displayBook('Failed to load book.');
    });
  }
  
  function displayBook(searchRequest) {
    document.getElementById('bookshelf').textContent = searchRequest;
  }
function Clear() {
    location.reload();
}
function Search2() {
    document.getElementById("search").addEventListener("click", searchRequest);
    const searchRequest = document.getElementById("search").value;   
}