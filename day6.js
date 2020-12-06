const { input } = require('./day6data');

const parseData = (input) =>
  input.replaceAll(/ /g, '')
    .split(/\n\n/)
    .map((group) => [...new Set(group.replaceAll(/\n/g, ""))]);

const countAnswers = (answers) => answers.reduce((acc, group) => acc + group.length, 0);

console.log('Total number of answers', countAnswers(parseData(input)));

module.exports = { parseData, countAnswers };
