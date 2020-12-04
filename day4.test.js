const { testData, passportData } = require('./day4data');
const { parseData } = require('./day4');

test("parseData - splits correctly", () => {
    expect(parseData(testData)).toEqual(['eyr:2027', 'eyr:2028']);
  });

