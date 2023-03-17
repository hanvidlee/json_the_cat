const request = require('request');

// Request URL


const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    // Printing the error if occurred
    if (error) {
      callback(error, null);
    } if (data.length === 0) {
      callback(`${breedName} does not exist`, null);
    }
    else {
      callback(null, data[0]["description"]);
    }
  });
};


module.exports = { fetchBreedDescription };