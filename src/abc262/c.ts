export const Main = (input) => {
    const inputList = input.split("\n");
    const aList: number[] = inputList[1]
        .split(" ")
        .map((v) => parseInt(v, 10))
        .map((v) => v - 1); // 0-indexed

    const indexSameCount: number = aList.filter((a, idx) => a === idx).length;
    const swappableCount: number = aList.filter((a, idx, list) => a > idx && list[a] === idx).length;

    const count = (indexSameCount * (indexSameCount - 1)) / 2 + swappableCount;
    console.log(count);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
