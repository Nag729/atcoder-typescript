export const Main = (input) => {
    const inputList = input.split("\n");
    const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));
    const totalCount = (N * (N - 1)) / 2;

    const duplicateMap: Map<number, number> = new Map();
    for (let i = 0; i < N; i++) {
        const a = aList[i];
        const count = duplicateMap.get(a) || 0;
        duplicateMap.set(a, count + 1);
    }
    const duplicateCount: number = [...duplicateMap].map(([_, v]) => (v * (v - 1)) / 2).reduce((a, b) => a + b, 0);
    console.log(totalCount - duplicateCount);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
