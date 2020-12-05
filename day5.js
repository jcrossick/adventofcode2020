const input = require("./day5data");

const parseData = (data) => data.split(/\n\n/);

const calcRow = (input, rowCount) => {
  const row = input.substring(0, rowCount);
  const seat = input.substring(rowCount);
  const rowNum = parseInt(row.replaceAll(/F/g, 0).replaceAll(/B/g, 1), 2);
  const seatNum = parseInt(seat.replaceAll(/F/g, 0).replaceAll(/B/g, 1), 2);
  return [rowNum, seatNum];
};

module.exports = { calcRow };
