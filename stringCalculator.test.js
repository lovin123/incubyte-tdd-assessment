import { add } from "./stringCalculator.js";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("42")).toBe(42);
  });

  test("returns the sum for two numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3")).toBe(5);
  });

  test("returns the sum for any amount of numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
    expect(add("10,20,30,40,50")).toBe(150);
  });

  test("handles new lines between numbers as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
    expect(add("7,8\n9")).toBe(24);
  });

  test("supports custom single-character delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//#\n2#3#4")).toBe(9);
    expect(add("//|\n5|6|7")).toBe(18);
  });

  test("throws an exception for a single negative number", () => {
    expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
    expect(() => add("//;\n-1;2;3")).toThrow("negatives not allowed: -1");
  });

  test("throws an exception listing all negative numbers", () => {
    expect(() => add("1,-2,-3,4")).toThrow("negatives not allowed: -2,-3");
    expect(() => add("//|\n-5|6|-7")).toThrow("negatives not allowed: -5,-7");
  });

  test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1")).toBe(1001);
    expect(add("1234,1001,3")).toBe(3);
    expect(add("//;\n1001;2;3")).toBe(5);
  });
});
