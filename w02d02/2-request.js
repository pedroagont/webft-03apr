// https://www.npmjs.com/package/request
const request = require('request');

const handleDataCallback = (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the body

  const data = JSON.parse(body);
  console.log('parsed data: ', data);

  console.log('results', data.results);
};

request('https://pokeapi.co/api/v2/pokemon', handleDataCallback);
