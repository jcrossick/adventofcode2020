const { input } = require("./day8data");
const inputLines = input.split(/\n/);

const getMoveAndAcc = (line) => {
    const [instruction, value] = line.split(" ");
    if (instruction == "nop") {
      return [1, 0];
    }
  
    if (instruction == "acc") {
      return [1, parseInt(value)];
    }
  
    if (instruction == "jmp") {
      return [parseInt(value), 0];
    }
  
    throw new Error("Did not receive nop/acc/jmp instruction");
  };

const runInput = (input) => {
  const indexRun = new Set();
  let indexVal = 0;
  let accumulator = 0;

  while (!indexRun.has(indexVal)) {
    indexRun.add(indexVal);
    const [move, change] = getMoveAndAcc(input[indexVal]);
    indexVal = indexVal + move;
    accumulator = accumulator + change;
  }

  return accumulator;
};

console.log("part 1 is", runInput(inputLines));

module.exports = { runInput, getMoveAndAcc };
