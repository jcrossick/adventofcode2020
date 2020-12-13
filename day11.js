const { input, testInput } = require("./day11data");

const padArray = (input) => {
  const emptyRow = [];
  for (let i = 0; i < input[0].length; i++) {
    emptyRow.push(".");
  }
  input.unshift(emptyRow);
  input.push(emptyRow);
  input.map((row) => row.unshift(".") && row.push("."));
  return input;
};

const getNewOccupancy = (prevRow, row, nextRow, seat, seatNo) => {
  const surrounds = [];
  surrounds.push(...prevRow.slice(seatNo - 1, seatNo + 2));
  surrounds.push(row[seatNo - 1]);
  surrounds.push(row[seatNo + 1]);
  surrounds.push(...nextRow.slice(seatNo - 1, seatNo + 2));
  const numberOfOccupiedSeats = surrounds.filter((seat) => seat == "#").length;

  if (seat == "L" && numberOfOccupiedSeats == 0) {
    return "#";
  }
  if (seat == "#" && numberOfOccupiedSeats >= 4) {
    return "L";
  }
  return seat;
};

const getNewArrayPart1 = (input) => {
  let hasChange = false;
  const newArray = input.map((row, rowNo) => {
    return row.map((seat, seatNo) => {
      if (seat == ".") {
        return ".";
      }
      //console.log("Going to get new occupancy for row, seat", rowNo, seatNo)
      const newOccupancy = getNewOccupancy(
        input[rowNo - 1],
        row,
        input[rowNo + 1],
        seat,
        seatNo
      );
      if (seat != newOccupancy) {
        hasChange = true;
      }
      return newOccupancy;
    });
  });
  return [newArray, hasChange];
};

const stableArrayPart1 = (input) => {
  let hasChange = true;
  let prevArray;
  let newArray = padArray(input);
  let countOfPasses = 0;
  while (hasChange) {
    prevArray = newArray;
    [newArray, hasChange] = getNewArrayPart1(prevArray);
  }
  return newArray;
};

const countOccupiedSeats = (input) => {
    console.log("input is", input);
return input.reduce(
  (acc1, row) =>
    acc1 +
    row.reduce((acc2, seat) => {
      if (seat == "#") {
        acc2++;
      }
      return acc2;
    }, 0),
  0
);}

const testArray = testInput.split(/\n/).map((row) => row.split(""));
const paddedTestArray = padArray(testArray);

const inputArray = input.split(/\n/).map((row) => row.split(""));
const paddedInputArray = padArray(inputArray);


console.log(
  "Part 1 number of occupiedSeats",
  countOccupiedSeats(stableArrayPart1(paddedInputArray))
);
