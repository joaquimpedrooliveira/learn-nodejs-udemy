const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5b24213d0b8ec0199d1bcf46';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found!");
//     }
//     console.log('TodoById:', todo);

// }).catch((e) => console.log(e));

var userId = '5b240344d9c47133dfe647f8';
if (!ObjectID.isValid(userId)) {
    console.log('Id is invalid!');
}
User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User:', user);
}).catch((e) => console.log(e));