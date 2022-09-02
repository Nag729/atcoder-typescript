export const Main = (input) => {
    const inputList = input.split("\n");
    const [N, M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const edgeList: Set<number>[] = [...Array(N)].map(() => new Set<number>());
    for (let i = 0; i < M; i++) {
        const [u, v] = inputList[i + 1].split(" ").map((v) => parseInt(v, 10));
        edgeList[u - 1].add(v - 1);
        edgeList[v - 1].add(u - 1);
    }

    let count = 0;
    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                const isTriangle: boolean = edgeList[i].has(j) && edgeList[j].has(k) && edgeList[k].has(i);
                if (isTriangle) count++;
            }
        }
    }
    console.log(count);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
