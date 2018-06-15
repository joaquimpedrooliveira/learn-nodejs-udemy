const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }
    //Só executa se não tiver erro, por conta do 'return' acima.
    console.log('Connected to MongoDB server')
    
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5b23f2f645c85b5dc1b9d1e7")}, 
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }, 
    //     { returnOriginal: false}
    // ).then((result) => {
    //     console.log(result)
    // });
    
    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5b23c746f676430baba1ae6b")}, 
        {
            $set: {
                name: 'Joaquim',
            },
            $inc: {
                age: -1
            }
        }, 
        { returnOriginal: false}
    ).then((result) => {
        console.log(result)
    });

    
    //client.close();
});