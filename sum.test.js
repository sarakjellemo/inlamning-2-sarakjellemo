// const { test, expect } = require("@jest/globals");

const add = require ("./sum"); 

test("Adds 4 + 6 to equal 10", () => {
    expect(add(4, 6)).toBe(10);
});

