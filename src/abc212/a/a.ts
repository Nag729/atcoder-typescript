import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const a = +input[0];
const b = +input[1];

if (b === 0) {
    console.log("Gold");
    process.exit();
}
if (a == 0) {
    console.log("Silver");
    process.exit();
}
console.log("Alloy");
