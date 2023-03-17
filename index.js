const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
const request = require('request');


fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(desc);
  }
});