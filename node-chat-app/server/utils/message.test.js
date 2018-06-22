var {generateMessage} = require('./message');

describe('generateMessage', () => {
    test('should generate the correct message object', () => {
        var from = 'sender';
        var text = 'message'
        var result = generateMessage(from, text);
        expect(result).toMatchObject({from, text});
        expect(result.createdAt).toBeDefined();
    });
});