//http://data.fixer.io/api/latest?access_key=d75f8fb3fd0bd5721429a00d6408fe6d

const axios = require('axios');

// Using promises
// const getExchangeRate = (from, to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=d75f8fb3fd0bd5721429a00d6408fe6d')
//         .then((response) => {
//             const euro = 1 / response.data.rates[from];
//             const rate = euro * response.data.rates[to];
//             return rate;
//         });
// };

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=d75f8fb3fd0bd5721429a00d6408fe6d')
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];

        if (isNaN(rate)) {
            throw new Error();
        }

        return rate;
    } catch (e) {
        throw new Error(`Unable to get exchange for ${from} and ${to}.`);
    }
};

// Using promises
// const getCountries = (currencyCode) => {
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//         .then ((response) => {
//             return response.data.map((country) => country.name);
//         });
// }

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`);
    }
}


const convertCurrency = async (from, to, amount) => {
    const currencyRate = await getExchangeRate(from, to);
    const convertedAmount = (amount * currencyRate).toFixed(2);
    const countries = await getCountries(to);
    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend these in the following countries: ${countries.join(', ')}`;
}

// getExchangeRate('USD', 'CAD').then((rate) => {
//     console.log(rate);
// });

// getCountries('USD').then((countries) => {
//     console.log(countries)
// });

convertCurrency('CAD', 'USD', 20).then((message) => {
        console.log(message);
    }).catch((e) => {
        console.log(e.message);
    });