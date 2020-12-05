const input = require("./day5data");

const parseData = (data) => data.split(/\n\n/);

const calcRow = (row) => {
  return parseInt(row.replaceAll(/F/g, 0).replaceAll(/B/g, 1), 2);
};

module.exports = { calcRow };
