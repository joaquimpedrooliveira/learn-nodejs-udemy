var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Joaquim'

    };
    setTimeout( () => callback(user), 3000);
}

getUser(29, (user) => {
    console.log(user);
})