const dfs = (list: number[], N: number, M: number): void => {
    if (list.length === N) {
        console.log(list.join(" "));
        return;
    }

    const prev = list.length > 0 ? list[list.length - 1] : 0;
    for (let i = prev + 1; i <= M; i++) {
        list.push(i);
        dfs(list, N, M);
        list.pop();
    }
};

export const Main = (input) => {
    const inputList = input.split("\n");
    const [N, M]: number[] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    dfs([], N, M);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
