export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    console.log(N, aList);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
