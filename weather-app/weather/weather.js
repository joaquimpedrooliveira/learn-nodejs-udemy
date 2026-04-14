const axios = require('axios');

getWeather = (lat, lng, callback) => {
    const weatherApiKey = 'cbf5ade195df7ac3e6cc7543ace4b134';
    axios.get(`https://api.forecast.io/forecast/${weatherApiKey}/${lat},${lng}?units=si`)
        .then((response) => {
            const body = response.data;
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        })
        .catch(() => {
            callback('Unable to connect to forecast.io servers');
        });
};

module.exports.getWeather = getWeather;

