const {SHA256} = require('crypto-js');

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: '4', 
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed, do not trust');
// }

// const jwt = require('jsonwebtoken');
// var data = {
//     id: 10,
// }

// var token = jwt.sign(data, 'abc123');
// console.log('Token:', token);
// var decoded = jwt.verify(token, 'abc123');
// console.log('Decoded:', decoded)

const bcrypt = require('bcryptjs');

var password = '123abc';
// bcrypt.genSalt(10 , (error, salt) => {
//     bcrypt.hash(password, salt, (error, hash) => {
//         console.log('Hash', hash);
//     });
// });

var hashedPassword = '$2a$10$y7DUM86DBgdWzgoeOCDiY.w1BMHv29o.oOMZ/E479C/vikp/alvIm';
bcrypt.compare(password, hashedPassword, (error, success) => {
    console.log(success);
});