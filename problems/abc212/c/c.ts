import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(/\s/);
let currentIndex = 0;
function next() {
    return input[currentIndex++];
}

const N = Number(next());
const M = Number(next());

const aList = [...Array(N)].map(() => Number(next()));
const bList = [...Array(M)].map(() => Number(next()));

aList.sort();
bList.sort();

console.log(N, M, aList, bList);
