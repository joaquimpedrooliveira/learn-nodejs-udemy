const app = require('./app');

jest.mock('./db');
var db = require('./db');

describe('App', () => {

    test('should call spy correctly', () => {
        let spy = jest.fn();
        spy('Joaquim', 39);
        expect(spy.mock.calls[0][0]).toBe('Joaquim');
        expect(spy.mock.calls[0][1]).toBe(39);
    });

    test('should call saveUser with user object', () => {
        let email = 'no@one.com';
        let password = '123abc';
        db.saveUser.mockResolvedValue();
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
})