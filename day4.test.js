const { testData } = require("./day4data");
const { parseData } = require("./day4");

test("parseData - splits correctly", () => {
  const val1 = {
    eyr: '2027',
    hcl: "#602927",
    hgt: "186cm",
    byr: '1939',
    iyr: '2019',
    pid: '552194973',
    ecl: "hzl",
  };

  const val2 = {
    pid: '657988073',
    eyr: '2020',
    byr: '1996',
    ecl: "brn",
    hcl: "#866857",
    iyr: '2015',
    hgt: "164cm",
  };

  const val3 = {
    hcl: "#fffffd",
    byr: '1951',
    cid: '321',
    iyr: '2017',
    eyr: '2022',
    ecl: "brn",
    hgt: "62in",
    pid: "#6ef4e1",
  };

  expect(parseData(testData)).toEqual([val1, val2, val3]);
});
