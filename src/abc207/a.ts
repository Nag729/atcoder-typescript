export const Main = (input) => {
    const inputList = input.split("\n");
    const numList: number[] = inputList[0].split(" ").map(Number);
    numList.sort((a, b) => b - a);
    console.log(numList[0] + numList[1]);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
