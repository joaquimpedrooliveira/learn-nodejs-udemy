const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

const geocodeApiKey = 'AIzaSyCoilqF7N_UXejgbvgCaGgyLtLItGEkeG4';
const weatherApiKey = 'cbf5ade195df7ac3e6cc7543ace4b134';

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${geocodeApiKey}&address=${encodedAddress}`;

axios
    .get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }
        console.log('Addresss:', response.data.results[0].formatted_address);
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        const weatherUrl = `https://api.forecast.io/forecast/${weatherApiKey}/${lat},${lng}?units=si`;
        return axios.get(weatherUrl);
    })
    .then((response) => {
        var weatherResults = response.data;
        console.log(`It is ${weatherResults.currently.temperature}°C but it feels like ${weatherResults.currently.apparentTemperature}°C`);
    })
    .catch((error) => {
        if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
            console.log('Unable to connect to API servers.');
        } else {
            console.log(error.message);
        }
    });