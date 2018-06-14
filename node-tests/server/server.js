const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
       error: 'Page not found.',
       name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        { name: 'Joaquim', age: 39 }, 
        { name: 'Julia', age: 8} ,
        { name: 'Paul', age: 78 }
    ]);
})

app.listen(3000);

module.exports.app = app;
