export const Main = (input) => {
    const inputList = input.split("\n");
    const [N, M] = inputList[0].split(" ").map((v) => parseInt(v, 10));

    const graph: number[][] = [];
    for (let i = 0; i < N; i++) graph[i] = [];
    for (let i = 0; i < M; i++) {
        const [start, end] = inputList[i + 1].split(" ").map((v) => parseInt(v, 10));
        graph[start - 1].push(end - 1);
    }

    let totalCount = 0;
    for (let i = 0; i < N; i++) {
        const seenList = [...Array(N)].map((_) => false);
        const queue: number[] = [];

        seenList[i] = true;
        queue.push(i);

        while (queue.length > 0) {
            const edge = queue.shift();

            for (const e of graph[edge!]) {
                if (seenList[e]) continue;

                seenList[e] = true;
                queue.push(e);
            }
        }

        totalCount += seenList.filter((bool) => !!bool).length;
    }

    console.log(totalCount);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
