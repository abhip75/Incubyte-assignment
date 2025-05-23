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
})
