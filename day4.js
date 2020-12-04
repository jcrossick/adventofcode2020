const { passportData } = require("./day4data");

const parseData = (input) => {
  return input
    .split(/\n\n/)
    .map((passports) => passports.split(/\ |\n/))
    .map((passport) => passport.reduce((acc, ppData) => {
        return { ...acc, [ppData.split(":")[0]]: ppData.split(":")[1] };
      }, {})
    );
};

module.exports = { parseData };
