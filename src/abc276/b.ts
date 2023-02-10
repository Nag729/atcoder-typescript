type Edge = {
    from: number;
    to: number;
};

export const Main = (inputList: string[]) => {
    const [N, M] = inputList[0].split(" ").map((v) => parseInt(v, 10));

    const edgeList: Edge[] = [];
    for (let i = 0; i < M; i++) {
        const [from, to] = inputList[i + 1].split(" ").map((v) => parseInt(v, 10));
        edgeList.push({ from, to });
    }

    // key: node, value: connected nodes
    const answerMap: Map<number, number[]> = new Map();
    [...Array(N)]
        .map((_, i) => i + 1)
        .forEach((node) => {
            // initialize
            answerMap.set(node, []);
        });

    edgeList.forEach((edge) => {
        const { from, to } = edge;
        answerMap.get(from)!.push(to);
        answerMap.get(to)!.push(from);
    });

    // output
    let answerStr = "";
    answerMap.forEach((nodeList) => {
        answerStr += `${nodeList.length} ${nodeList.sort((a, b) => a - b).join(" ")}\n`;
    });
    console.log(answerStr.trim());
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
