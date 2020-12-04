const { passportData } = require("./day4data");

const parseData = (input) => {
  return input
    .split(/\n\n/)
    .map((passports) => passports.split(/\ |\n/))
    .map((passport) =>
      passport.reduce((acc, ppData) => {
        return { ...acc, [ppData.split(":")[0]]: ppData.split(":")[1] };
      }, {})
    );
};

const findValidPassports = (passports) => passports.filter(
    (passport) =>
      passport.byr &&
      passport.iyr &&
      passport.eyr &&
      passport.hgt &&
      passport.hcl &&
      passport.ecl &&
      passport.pid
  );

module.exports = { parseData, findValidPassports };

console.log('Number of valid passports is', findValidPassports(parseData(passportData)).length);