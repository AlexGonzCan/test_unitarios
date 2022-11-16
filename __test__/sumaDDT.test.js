//TDD
//TEST
const sum = require("../utils/suma");

describe("calculator", () => {
  test.each`
    firstValue | secondValue | expectedResult
    ${3}       | ${0}        | ${3}
    ${3}       | ${7}        | ${10}
  `(
    "$firstValue + $secondValue should return $expectedResult",
    ({ firstValue, secondValue, expectedResult }) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    }
  );
});
