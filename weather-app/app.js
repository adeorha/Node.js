const request = require('request');



request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=395%20Ano%20Nuevo%20Ave',
  json: true
}, (error, response, body) => {
//  console.log(error);
//  console.log(response.statusCode);
console.log('Formatted address = '+JSON.stringify(body.results[0].formatted_address, undefined, 2));
console.log('Latitude = '+JSON.stringify(body.results[0].geometry.location.lat, undefined, 2));
console.log('Longitude = '+JSON.stringify(body.results[0].geometry.location.lng, undefined, 2));

})
