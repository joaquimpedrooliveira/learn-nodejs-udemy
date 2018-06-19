const request = require('supertest');

const { app } = require('../server');
const { Todo } = require('../models/todo');
const { ObjectID } = require('mongodb');

const todos = [
    { _id: new ObjectID() , text: 'First text todo' },
    { _id: new ObjectID(), text: 'Second text todo', completed: true, completedAt: 2905}
];


beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos).then(() => done());
    });
});

describe('POST /todos', () => {
    test('should create a new todo', (done) => {
        let text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos).toHaveLength(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err) => done(err));
            });
        
    });

    test('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos).toHaveLength(2);
                    done();
                }).catch((err) => done(err));
            })
    });
});

describe('GET /todos', () => {
    test('it should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id', () => {
    test('should return todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    test('should return 404 if todo not found', (done) => {
        request(app)
            .get(`/todos/${new ObjectID().toHexString()}`)
            .expect(404)
            .end(done);

    });

    test('should return 404 for non-object ids', (done) => {
        request(app)
            .get(`/todos/123}`)
            .expect(404)
            .end(done);
    });
});

describe('DELETE /todos/:id', () => {
    test('should remove a todo', (done) => {
        let hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.findById(hexId).then((todo) => {
                    expect(todo).toBeNull();
                    done();
                }).catch((err) => done(err));
            })

    });
    
    test('should return 404 if todo not found', (done) => {
        request(app)
            .delete(`/todos/${new ObjectID().toHexString()}`)
            .expect(404)
            .end(done);
    });

    test('should return 404 if object id is invalid', (done) => {
        request(app)
            .delete(`/todos/123}`)
            .expect(404)
            .end(done);
    });
});

describe('PATCH /todos/:id', () => {
    test('should update completed todo information', (done) => {
        let hexId = todos[0]._id.toHexString();
        let text = 'This should be the new text';
        request(app)
            .patch(`/todos/${hexId}`)
            .send({ text, completed: true })
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completed).toBe(true);
                expect(res.body.todo.completedAt).not.toBeNull();
                expect(typeof res.body.todo.completedAt).toBe('number');
            })
            .end(done);
    });

    test('should clear completedAt when todo is not completed', (done) => {
        let hexId = todos[1]._id.toHexString();
        let text = 'This should be the new text';
        request(app)
            .patch(`/todos/${hexId}`)
            .send({ text, completed: false })
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completed).toBe(false);
                expect(res.body.todo.completedAt).toBeNull();
            })
            .end(done);
    })
});