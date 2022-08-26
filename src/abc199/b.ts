export const Main = (input) => {
    const inputList = input.split("\n");
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));
    const bList: number[] = inputList[2].split(" ").map((v) => parseInt(v, 10));

    console.log(Math.max(0, Math.min(...bList) - Math.max(...aList) + 1));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
