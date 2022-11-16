// TEST

const sum = require("../utils/suma");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -2 + 3 to equal 1", () => {
  expect(sum(-2, 3)).toBe(1);
});

test("adds 2.5 + 2.5 to equal 5", () => {
  expect(sum(2.5, 2.5)).toBe(5);
});
