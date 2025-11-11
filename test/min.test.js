const minNumber = require("../min.js");

describe("minNumber", () => {
  
  test("should return the minimum number of array", () => {
    expect(minNumber([1, 3, 6, 8, 3, 9, 21])).toBe(1);
  });

  test("should work with negative numbers", () => {
    expect(minNumber([-5, -10, -3, -1])).toBe(-10);
  });

  test("should return min from mixed positive and negative numbers", () => {
    expect(minNumber([-10, 5, -3, 20, 0])).toBe(-10);
  });

  test("should return min when it is the first element", () => {
    expect(minNumber([1, 3, 5, 10])).toBe(1);
  });

  test("should return min when it is the last element", () => {
    expect(minNumber([20, 15, 10, 5])).toBe(5);
  });

  test("should handle duplicate min values", () => {
    expect(minNumber([5, 1, 5, 1, 3])).toBe(1);
  });

});
