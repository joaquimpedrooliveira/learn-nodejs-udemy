const axios = require('axios');
const apiKey = 'AIzaSyCoilqF7N_UXejgbvgCaGgyLtLItGEkeG4';

var geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`)
        .then((response) => {
            const body = response.data;
            if (body.status === 'ZERO_RESULTS') {
                return Promise.reject('Unable to find that address.');
            } else if (body.status === 'OK') {
                return {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                };
            }
        })
        .catch((err) => {
            return Promise.reject(typeof err === 'string' ? err : 'Unable to connecto to Google servers.');
        });
};
geocodeAddress('60811760').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch( (errorMessage) => {
    console.log(errorMessage);
});