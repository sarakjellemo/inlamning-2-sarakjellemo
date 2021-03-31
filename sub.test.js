const sub = require ("./sub"); 

test("subtract 6 - 4 to equal ", () => {
    expect(sub(6, 4)).toBe(2);
});