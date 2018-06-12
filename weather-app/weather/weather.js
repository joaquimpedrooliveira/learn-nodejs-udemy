const request = require('request');

getWeather = (lat, lng, callback) => {
    const weatherApiKey = 'cbf5ade195df7ac3e6cc7543ace4b134';
    request(
        {
            url: `https://api.forecast.io/forecast/${weatherApiKey}/${lat},${lng}?units=si`,
            json: true
        }, (error, response,  body) => {
            if (error) {
                callback('Unable to connect to forecast.io servers');
            } else if (!error && response.statusCode === 200) {
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            } else {
                callback('Unable to fetch weather.');
            }
        }
    );
};

module.exports.getWeather = getWeather;

