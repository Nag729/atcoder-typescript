export const Main = (inputList: string[]) => {
    const [N, M] = inputList[0].split(" ").map(Number);

    const edgeList: [number, number][] = [];
    for (let i = 1; i <= M; i++) {
        const [a, b] = inputList[i].split(" ").map(Number);
        edgeList.push([a, b]);
    }

    const obj: { [vertex: number]: number[] } = {};
    const vertexList: number[] = [...Array(N)].map((_, i) => i + 1);
    vertexList.forEach((vertex) => {
        // initialize
        obj[vertex] = [];
    });

    edgeList.forEach(([a, b]) => {
        const min = Math.min(a, b);
        const max = Math.max(a, b);

        const minAncestor =
            obj[min] !== undefined ? min : Object.values(obj).findIndex((valueList) => valueList.includes(min)) + 1;
        const maxAncestor =
            obj[max] !== undefined ? max : Object.values(obj).findIndex((valueList) => valueList.includes(max)) + 1;

        if (minAncestor === maxAncestor) return;

        obj[minAncestor].push(maxAncestor);
        if (obj[max]) delete obj[max];
    });

    console.log(Object.keys(obj).length);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
