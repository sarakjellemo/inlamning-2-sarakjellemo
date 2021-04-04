const reverse = require("./rev");

test("Take a string and return reverse", () => {
    expect(reverse("cars")).toBe("srac");
});