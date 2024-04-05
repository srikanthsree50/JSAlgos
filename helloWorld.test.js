const helloWorld = require('./helloWorld');

test("returning 'Hello World' as string " , () =>{
    const result = helloWorld();
    expect(result).toBe('Hello World')
})