const isPalindrome = require("./pal");

test("test to see if word is palindrome", () => {
    expect(isPalindrome("anna")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
});