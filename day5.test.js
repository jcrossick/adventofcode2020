const { calcRow, findHighestSeat, parseData } = require("./day5");
const { input } = require("./day5data");
const { test, expect } = require("@jest/globals");

test("it converts the row to a number", () => {
  //8 rows, 4 seats (zero-indexed)
  const testData1 = `FFBLR`; //1, 1
  const testData2 = `BFFRL`; //4, 2
  const testData3 = `FBFRR`; //2, 3
  expect(calcRow(testData1, 3)).toEqual([1, 1, 9]);
  expect(calcRow(testData2, 3)).toEqual([4, 2, 34]);
  expect(calcRow(testData3, 3)).toEqual([2, 3, 19]);
});

test("It parses the data", () => {
    const testData = `FFBLR
BFFRL
FBFRR`;
    expect(parseData(testData)).toEqual([`FFBLR`, `BFFRL`, `FBFRR`]);
})

test("It parses the actual data", () => {
    expect(parseData(input)).toHaveLength(874);
})

test("It finds the highest seat number", () => {
    const testData = [`FFBLR`, `BFFRL`, `FBFRR`];
    expect(findHighestSeat(testData, 3)).toBe(34);
})