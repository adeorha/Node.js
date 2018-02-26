const request = require('request');

geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
  }, (error, response, body) => {
  if(error){
    callback('Unable to connect to Google servers');
  }
  else if(body.status === 'ZERO_RESULTS'){
    callback('Unable to find that address');
  }
  else if(body.status === 'OVER_QUERY_LIMIT'){
    callback('Over the query limit.');
  }
  else if (body.status === 'OK'){
    //  console.log(response.statusCode);
    var result = {
      address: body.results[0].formatted_address,
      lat: body.results[0].geometry.location.lat,
      lng: body.results[0].geometry.location.lng
    };
    callback(undefined, result);
  }
  })
};

module.exports = {
  geocodeAddress
};
