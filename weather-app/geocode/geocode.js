const request = require('request');

const apiKey = 'AIzaSyCoilqF7N_UXejgbvgCaGgyLtLItGEkeG4';

var geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`,
            json: true
        }, (error, response,  body) => {
            if (error) {
                callback('Unable to connecto to Google servers.');
                //console.log('Unable to connecto to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                //console.log('Unable to find that address.');
                callback('Unable to find that address.');
            } else if (body.status === 'OK') {
                //console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
                // console.log(`Address: ${body.results[0].formatted_address}`);
                // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
                // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            }
    });
}

module.exports = {
    geocodeAddress,
}