export const Main = (inputList: string[]) => {
    const [N, _M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const aList: number[] = !!inputList[1] ? inputList[1].split(" ").map((v) => parseInt(v, 10)) : [];

    const formattedGraph: number[][] = [];

    let tmp: number[] = [];
    for (let i = 1; i <= N; i++) {
        tmp.push(i);

        if (!aList.includes(i)) {
            formattedGraph.push(tmp);
            tmp = [];
        }
    }

    const answer: string = formattedGraph
        .map((l: number[]) => l.sort((a, b) => b - a))
        .flat()
        .join(" ");
    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
