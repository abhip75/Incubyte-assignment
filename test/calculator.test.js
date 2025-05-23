const { add } = require('../src/calculator');

test('returns 0 for empty strings', () => {
    expect(add("")).toBe(0);
});

test('returns 1 for "1"', () => {
    expect(add("1")).toBe(1);
});

test('returns 6 for "1,5"',() => {
    expect(add("1,5")).toBe(6);
});

test('returns sum of multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("0,2,0")).toBe(2);
    expect(add("10,20,30")).toBe(60);
});

test('returns 6 for "1\\n2,3"', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimeter ;', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws error for single negative number', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('throws error for multiple negative numbers', () => {
    expect(() => add("-1,-3")).toThrow("negative numbers not allowed: -1,-3");
});