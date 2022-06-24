export const Main = (input) => {
    const inputList = input.split("\n").filter((x) => x !== "");
    const [N, A, X, Y] = inputList[0].split(" ").map((x) => parseInt(x, 10));

    let sum: number = 0;
    for (let i = 1; i < N + 1; i++) {
        const price = i <= A ? X : Y;
        sum += price;
    }
    console.log(sum);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
