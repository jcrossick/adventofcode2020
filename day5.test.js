const { calcRow } = require("./day5");
const { test, expect } = require("@jest/globals");

test("it converts the row to a number", () => {
    //8 rows, 4 seats (zero-indexed)
    const rowCount = 3;
  const testData1 = `FFBFB`; //1, 1
  const testData2 = `BFFBF`; //4, 2
  const testData3 = `FBFBB`; //2, 3
  expect(calcRow(testData1, 3)).toEqual([1, 1]);
  expect(calcRow(testData2, 3)).toEqual([4, 2]);
  expect(calcRow(testData3, 3)).toEqual([2, 3]);
});
