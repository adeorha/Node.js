const request = require('request');

var getWeather = (lat, lng, callback) =>  {
  request({
  url: `https://api.darksky.net/forecast/fabce0043aeda2b7cecab770a443086e/${lat},${lng}`,
  json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      var result = {
        temp: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      };
      callback(undefined, result);
    }
    else {
      callback('Unable to fetch weather');
    }

  });
};

module.exports.getWeather = getWeather;
