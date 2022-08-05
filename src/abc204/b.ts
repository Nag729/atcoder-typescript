export const Main = (input) => {
    const inputList = input.split("\n");
    // const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const sum = aList.map((a) => Math.max(a - 10, 0)).reduce((a, sum) => sum + a, 0);
    console.log(sum);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
