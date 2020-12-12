const { input } = require("./day9data");
const inputNumbers = input.split(/\n/).map(entry => parseInt(entry));

const findFirstNonSum = (inputNumbers) => {
    let firstNonSum = 0;
    for (let i = 25; i < inputNumbers.length; i++) {
        let hasSum = false;
        for (let j = i - 25; j < i - 1; j++ ) {
            for (let k = j + 1; k < i; k++) {
                if (inputNumbers[i] == inputNumbers[j] + inputNumbers[k]) {
                    hasSum = true;
                    break;
                }
            }
            if (hasSum) {
                break;
            }
        }
        if (!hasSum) {
            firstNonSum = inputNumbers[i];
            break;
        }
    }
    return firstNonSum;
}

console.log("Running part 1", findFirstNonSum(inputNumbers));