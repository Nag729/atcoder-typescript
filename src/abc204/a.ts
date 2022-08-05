export const Main = (input) => {
    const inputList = input.split("\n");
    const [x, y] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    console.log(solve(x, y));
};

const solve = (x: number, y: number): number => {
    if (x === y) {
        return x;
    }
    return 3 - (x + y);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
