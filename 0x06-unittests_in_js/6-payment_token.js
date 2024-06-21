// simple function that calculate the payments
const Utils = require('./utils');

function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ 'data': 'Successful response from the API' });
    }
}
module.exports = getPaymentTokenFromAPI;
