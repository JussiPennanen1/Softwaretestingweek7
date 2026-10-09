import { divide } from "../src/calculator.js";

describe("divide function", () => {
  // Positive test: valid division
  test("divides two positive numbers correctly", () => {
    expect(divide(6, 2)).toBe(3);
  });

  // Negative test 1: Argument a is not a number
  test("throws TypeError if the first argument is not a number", () => {
    expect(() => divide("6", 2)).toThrow(TypeError);
  });

  // Negative test 2: Argument b is not a number
  test("throws TypeError if the second argument is not a number", () => {
    expect(() => divide(6, "2")).toThrow(TypeError);
  });

  // Negative test 3: Argument is NaN
  test("throws TypeError if either argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  // Negative test 4: Division by zero
  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow(RangeError);
  });
});