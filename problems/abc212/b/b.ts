import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const xList = input[0]
    .split("")
    .filter((i) => i !== "\n")
    .map((i) => Number(i));

const firstX = xList[0];
const isAllSame = xList.every((x) => x === firstX);
const isSerialNumber = xList.every((x, index) => {
    const expected = (firstX + index) % 10;
    return x === expected;
});

if (isAllSame || isSerialNumber) {
    console.log("Weak");
} else {
    console.log("Strong");
}
