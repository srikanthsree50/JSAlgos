const countOccur = require('./countOccurences');

test('return count of numbers' ,() => {
    let result = countOccur("Hello" ,"l");
    expect(result).toBe(2)
})