const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);
    
    it('should call spy correctly', () => {
        let spy = expect.createSpy();
        spy('Joaquim', 39);
        expect(spy).toHaveBeenCalledWith('Joaquim', 39);
    });

    it('should call saveUser with user object', () => {
        let email = 'no@one.com';
        let password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
})