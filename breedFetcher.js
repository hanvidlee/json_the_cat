const request = require('request');
let arg = process.argv.slice(2);
// Request URL
let url = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

request(url, (error, response, body) => {

  // Printing the error if occurred
  if (error) console.log(error);

  // Printing body
  console.log(body);
});

