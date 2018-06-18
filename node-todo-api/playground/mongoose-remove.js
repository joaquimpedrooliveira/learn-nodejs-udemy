const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove().then( (todo) => {

// });

Todo.findByIdAndRemove('5b27f8d5ec2e290e60a16123').then((todo) => {
    console.log(todo);
});