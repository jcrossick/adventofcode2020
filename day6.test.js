const { parseData, countAnswers } = require("./day6");
const { test, expect } = require("@jest/globals");

test("it parses the data correctly", () => {
  const testdata = `ab
    
    c
    d`;
  expect(parseData(testdata)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("it dedupes entries", () => {
  const testdata = `ab
    
    cf
    df`;

  expect(parseData(testdata)).toEqual([
    ["a", "b"],
    ["c", "f", "d"],
  ]);
});

test("it counts entries", () => {
  const testdata4 = `ab
    
    a
    b`;
  const testdata5 = `ab
      
      cf
      df`;

  const testData38 = `obegcmqadtrhui
qbgocuzeimrhdat
icuagdbztxrqehoy
cuietqhbfroagds
uqdgikwhrvcjeltbpao

arke
qzr
plmgnr
uriq`;
  expect(countAnswers(parseData(testdata4))).toEqual(4);
  expect(countAnswers(parseData(testdata5))).toEqual(5);
  expect(countAnswers(parseData(testData38))).toEqual(38);
});
