const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    test('should add new user', () => {
        let users = new Users();
        let user = { id: '123', name: 'Joaquim', room: 'Node.JS' };
        let responseUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    test('should remove user', () => {
        userJean = users.users[1];
        var userRemoved = users.removeUser(userJean.id);
        expect(users.users.length).toBe(2);
        expect(users.users).not.toContain(userJean);
        expect(userRemoved).toMatchObject(userJean);
    });

    test('should not remove not user', () => {
        var user = users.removeUser('999');
        expect(users.users.length).toBe(3);
        expect(user).toBeUndefined();
    });

    test('should find user', () => {
        let user = users.getUser('2');
        expect(user).toMatchObject(users.users[1]);
    });

    test('should not find user', () => {
        let user = users.getUser('20');
        expect(user).toBeUndefined();
    });


    test('should return names for Node Course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    test('should return names for React Course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

});