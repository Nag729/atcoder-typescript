export const Main = (input) => {
    const inputList = input.split("\n");
    // const N = parseInt(inputList[0], 10);
    const scoreList: number[] = inputList[1].split(" ").map(Number);

    const score = [...scoreList].sort((a, b) => b - a)[1];
    console.log(scoreList.indexOf(score) + 1);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
