const {isRealString} = require('./validation');

describe('isRealString', () => {
    test('should reject non string values', () => {
        expect(isRealString(123)).toBe(false);
    });
    
    test('should reject string with only spaces', () => {
        expect(isRealString('      ')).toBe(false);
    });

    test('should allow strings with non-space characters', () => {
        expect(isRealString('    Abc  ')).toBe(true);
    });
});

