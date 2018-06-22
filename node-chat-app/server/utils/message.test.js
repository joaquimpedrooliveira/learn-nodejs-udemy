var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    test('should generate the correct message object', () => {
        var from = 'sender';
        var text = 'message';
        var result = generateMessage(from, text);
        expect(result).toMatchObject({from, text});
        expect(result.createdAt).toBeDefined();
    });
});

describe('generateLocationMessage', () => {
    test('should generate correct location objetct', () => {
        var from = 'sender';
        var lat = '123';
        var lon = '456';
        var result = generateLocationMessage(from, lat, lon);
        expect(result).toMatchObject({
            from,
            url: `https://www.google.com/maps?q=${lat},${lon}`
        });
        expect(result.createdAt).toBeDefined();
    });
})