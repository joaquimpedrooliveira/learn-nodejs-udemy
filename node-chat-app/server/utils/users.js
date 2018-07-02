class Users {
    constructor () {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room }
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if (user) {
          this.users = this.users.filter(user => user.id !== id);
        }
        return user;
    }
    
    getUser(id) {
        var usersFound = this.users.filter(user => user.id === id);
        return usersFound[0];
    }

    getUserList(room) {
        var usersInRoom = this.users.filter(user => user.room === room);
        var namesArray = usersInRoom.map(user => user.name);
        return namesArray;
    }


}

module.exports = {Users}