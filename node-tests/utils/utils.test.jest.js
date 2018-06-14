const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        test('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44);
            expect(typeof res).toBe('number')
        });
        
        test('should async square number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16);
                done();
            })
        });

    });
    describe('#square', () => {
        test('should square a number', () => {
            let res = utils.square(3);
            expect(res).toBe(9);
            expect(typeof res).toBe('number');
        });
        
        test('should async add two numbers', (done) => {
            utils.asyncAdd(5, 4, (sum) => {
                expect(sum).toBe(9);
                done();
            });
        });

    });
});

test('should expect some values', () => {
    expect(12).not.toBe(11);
    expect({name: 'Joaquim'}).toEqual({name: 'Joaquim'});
    expect([2,3,4]).toEqual(expect.not.arrayContaining([5]));
    expect({
        name: 'Joaquim',
        age: 39,
        location: 'Fortaleza'
    }).toMatchObject({
        age: 39
    })
});

test('should set first and last name', () => {
    user = {
        age: 39,
        location: 'Fortaleza'
    }
    returnedUser = utils.setName(user, 'Joaquim Oliveira');
    expect(user).toMatchObject({age: 39, location: 'Fortaleza'});
    expect(user).toMatchObject({firstName: 'Joaquim', lastName: 'Oliveira'});
    expect(typeof user).toBe('object');
});