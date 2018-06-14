const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async square number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16);
                done();
            })
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            let res = utils.square(3);
            expect(res).toBe(9).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(5, 4, (sum) => {
                expect(sum).toBe(9).toBeA('number');
                done();
            });
        });
    });
})




it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: 'Joaquim'}).toEqual({name: 'Joaquim'});
    expect([2,3,4]).toExclude(5);
    expect({
        name: 'Joaquim',
        age: 39,
        location: 'Fortaleza'
    }).toInclude({
        age: 39
    })
});

it('should set first and last name', () => {
    user = {
        age: 39,
        location: 'Fortaleza'
    }
    returnedUser = utils.setName(user, 'Joaquim Oliveira');
    expect(user).toInclude({age: 39, location: 'Fortaleza'})
        .toInclude({firstName: 'Joaquim', lastName: 'Oliveira'})
        .toBeA('object');
});
