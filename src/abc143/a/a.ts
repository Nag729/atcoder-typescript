import * as fs from "fs";

// const input = fs.readFileSync("problems/abc143/a/input.txt", "utf8").split(" ");
const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const a = +input[0];
const b = +input[1];

const res = a - b * 2;

if (res > 0) {
    console.log(res);
} else {
    console.log(0);
}
