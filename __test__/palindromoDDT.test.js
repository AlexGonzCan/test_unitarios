//TDD
//TEST
const palindromo = require("../utils/palindromo");

describe("palindromo", () => {
  test.each`
    checkValue | expectedResult
    ${"alex"}  | ${"xela"}
    ${"ana"}   | ${"ana"}
  `(
    "$checkValue = palindromo  should return $expectedResult",
    ({ checkValue, expectedResult }) => {
      expect(palindromo(checkValue)).toBe(expectedResult);
    }
  );
});
