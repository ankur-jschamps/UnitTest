const countEvenNumbers = require("../counteven.js");

describe("countEvenNumbers", () => {
  
  test("should count even numbers in an array", () => {
    expect(countEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(3);
  });

  test("should return 0 when no even numbers", () => {
    expect(countEvenNumbers([1, 3, 5, 7])).toBe(0);
  });

  test("should count even numbers including 0", () => {
    expect(countEvenNumbers([0, 2, 4, 5])).toBe(3);
  });

  test("should work with negative even and odd numbers", () => {
    expect(countEvenNumbers([-2, -3, -4, -5])).toBe(2);
  });

  test("should handle duplicate even values", () => {
    expect(countEvenNumbers([2, 2, 2, 1])).toBe(3);
  });

});
