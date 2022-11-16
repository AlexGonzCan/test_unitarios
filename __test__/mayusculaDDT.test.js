//TDD
//TEST

const mayus = require("../utils/esmayuscula");
describe("check Mayus", () => {
  test.each`
    textValue  | expectedResult
    ${"HELLO"} | ${true}
    ${"hello"} | ${false}
  `(
    "$textValue = Mayus return $expectedResult",
    ({ textValue, expectedResult }) => {
      expect(mayus(textValue)).toBe(expectedResult);
    }
  );
});
