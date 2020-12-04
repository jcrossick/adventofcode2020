const { testData, passportData } = require('./day4data');
const { parseData } = require('./day4');

test("parseData - splits correctly", () => {

    expect(parseData()).toEqual(testData);
  });

