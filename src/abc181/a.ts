export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    console.log(N % 2 === 0 ? "White" : "Black");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
