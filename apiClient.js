// apiClient.js
const fetch = require('node-fetch'); // Import the 'node-fetch' module for making HTTP requests

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "api_key=live_LXw4RQ2vrgIqtL6MYf4ulgJBIvAR2nMWH7wTjdJwhQ7scgylmIi7IC42l7qSQf8C"
});

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('error', error));
