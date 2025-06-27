export const Main = (inputList: string[]) => {
    const [N, M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const edges: [number, number][] = inputList
        .slice(1, M + 1)
        .map((line) => line.split(" ").map((v) => parseInt(v, 10) - 1) as [number, number]);

    const connections: number[][] = Array.from({ length: N }, () => []); // [node][neighbors]
    edges.forEach(([u, v]) => {
        connections[u].push(v);
        connections[v].push(u);
    });

    const visited: boolean[] = new Array(N).fill(false);
    let cycleCount = 0;

    const dfs = (node: number, parent: number) => {
        visited[node] = true;
        for (const neighbor of connections[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, node);
            } else if (neighbor !== parent) {
                cycleCount++;
            }
        }
    };

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            dfs(i, -1);
        }
    }

    console.log(cycleCount / 2); // 逆方向のサイクルを除外する
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
