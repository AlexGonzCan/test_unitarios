// TEST

const palindromo = require("../utils/palindromo");

test("Palindromo de alex", () => {
  const result = palindromo("alex");
  expect(result).toBe("xela");
});

test("Palindromo de ana", () => {
  const result = palindromo("ana");
  expect(result).toBe("ana");
});
