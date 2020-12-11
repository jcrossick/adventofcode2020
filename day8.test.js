const { getMoveAndAcc } = require("./day8");
const { test, expect } = require("@jest/globals");

test('It finds the right move/acc for each instruction', () => {
    expect(getMoveAndAcc('acc +33')).toEqual([1, 33]);
    expect(getMoveAndAcc('acc -4')).toEqual([1, -4]);
    expect(getMoveAndAcc('nop +43')).toEqual([1, 0]);
    expect(getMoveAndAcc('nop -5')).toEqual([1, 0]);
    expect(getMoveAndAcc('jmp +6')).toEqual([6, 0]);
    expect(getMoveAndAcc('jmp -8')).toEqual([-8, 0]);
})