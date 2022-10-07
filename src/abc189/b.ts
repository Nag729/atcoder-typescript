export const Main = (inputList: string[]) => {
    const [N, X] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const alcoholList: number[] = [];

    for (let i = 1; i <= N; i++) {
        const [v, p] = inputList[i].split(" ").map((v) => parseInt(v, 10));
        alcoholList.push(v * p);
    }

    let sum = 0;
    const x100 = X * 100;
    for (let i = 0; i < N; i++) {
        sum += alcoholList[i];
        if (sum > x100) {
            console.log(i + 1);
            return;
        }
    }
    console.log(-1);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
