
const sumThreeNumbers = require('../sum');

describe('sumThreeNumbers', () => {
  test('should correctly sum three positive numbers', () => {
    expect(sumThreeNumbers(1, 2, 3)).toBe(6);
  });

  test('should correctly sum three negative numbers', () => {
    expect(sumThreeNumbers(-1, -2, -3)).toBe(-6);
  });

  test('should correctly sum a mix of positive and negative numbers', () => {
    expect(sumThreeNumbers(10, -5, 2)).toBe(7);
  });

  test('should handle zero correctly', () => {
    expect(sumThreeNumbers(0, 5, -5)).toBe(0);
  });
});