var moment = require('moment');

var date = moment();
date.add(100, 'years').subtract(9, 'months');
//console.log(date.format('MMM Do YYYY'));
console.log(date.format('h:mm a '));