const { input } = require("./day5data");

const parseData = (data) => data.split(/\r?\n/);

const calcRow = (input, rowCount) => {
  const row = input.substring(0, rowCount);
  const seat = input.substring(rowCount);
  const rowNum = parseInt(row.replaceAll(/F/g, 0).replaceAll(/B/g, 1), 2);
  const seatNum = parseInt(seat.replaceAll(/L/g, 0).replaceAll(/R/g, 1), 2);
  return [rowNum, seatNum, rowNum * 8 + seatNum];
};

const findHighestSeat = (array, rowCount) =>
  array.reduce((acc, row) => {
    const seatId = calcRow(row, rowCount)[2];
    return seatId > acc ? seatId : acc;
  }, 0);

const findMissingSeats = (arr, rowCount) => {
  const seats = arr.map((row) => calcRow(row, rowCount)[2]);
  seats.sort((a, b) => a - b);
  console.log("The seat ids sorted are", seats);
  const beforeMissingSeat = seats.reduce((acc, seat, i) => {
    if (seats[i - 1] + 1 != seat) {
      acc.push(seats[i - 1]);
    }
    return acc;
  }, []);
  console.log("The seats before the missing seats are", beforeMissingSeat);
};

console.log("The missing seats are", findMissingSeats(parseData(input), 7));

console.log(
  "The highest seat id in the dataset is",
  findHighestSeat(parseData(input), 7)
);

module.exports = { parseData, calcRow, findHighestSeat };
