const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }
    //Só executa se não tiver erro, por conta do 'return' acima.
    console.log('Connected to MongoDB server')
    
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Joaquim'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete(
            {_id: new ObjectID('5b23c272edf7aa7c5f21919d')}
        ).then((result) => {
            console.log(result)
        }
    );
    
    //client.close();
});