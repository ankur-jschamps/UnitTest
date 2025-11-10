const reverseArray = require("../reverseArray");

describe("reverseArray", () => {
  test("should reverse the array", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test("should reverse array of strings", () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });
});
