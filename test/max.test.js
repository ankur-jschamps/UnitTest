

const maxNumber = require("../max.js");

describe("maxNumber", () => {
    test("should max the number of array", () => {
        expect(maxNumber([1,3,6,8,3,9,21])).toBe(21);
    });

    test("should work with negative numbers", () => {
  expect(maxNumber([-5, -10, -3, -1])).toBe(-1);
});

test("should return max from mixed positive and negative numbers", () => {
  expect(maxNumber([-10, 5, -3, 20, 0])).toBe(20);
});

test("should return max when it is the first element", () => {
  expect(maxNumber([50, 3, 2, 1])).toBe(50);
});

test("should return max when it is the last element", () => {
  expect(maxNumber([1, 2, 3, 100])).toBe(100);
});

test("should handle duplicate max values", () => {
  expect(maxNumber([5, 1, 5, 3])).toBe(5);
});

});