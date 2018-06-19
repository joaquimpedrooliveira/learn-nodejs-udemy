const {ObjectID} = require('mongodb');
const { Todo } = require('../../models/todo');
const { User } = require('../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'user1@example.com',
    password: 'user1pass',
    tokens: [{
            access: 'auth',
            token: jwt.sign({_id: userOneId.toHexString(), access:'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'user2@example.com',
    password: 'user2pass'
}];

const todos = [
    { _id: new ObjectID() , text: 'First text todo' },
    { _id: new ObjectID(), text: 'Second text todo', completed: true, completedAt: 2905}
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos).then(() => done());
    });
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};