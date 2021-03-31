const div = require ("./div"); 

test("divide 10 / 2 to equal ", () => {
    expect(div(10, 2)).toBe(5);
});