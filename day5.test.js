const { calcRow } = require("./day5");
const { test, expect } = require("@jest/globals");

test("it converts the row to a number", () => {
    //8 rows
  const testData1 = `FFB`; //1
  const testData2 = `BFF`; //4
  const testData3 = `FBF`; //2
  expect(calcRow(testData1)).toBe(1);
  expect(calcRow(testData2)).toBe(4);
  expect(calcRow(testData3)).toBe(2);
});
