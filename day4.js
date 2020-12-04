const { passportData } = require("./day4data");

const parseData = (input) => {
    return input.split(/\n\n/).map(passport => passport.split(/\ |\n/))
};

module.exports = { parseData };
