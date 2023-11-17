export const Main = (inputList: string[]) => {
    const [N, M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const coordinates: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    // key: coordinate, value: count
    const presentMap: Map<number, number> = new Map();
    for (let i = 0; i < N; i++) {
        const coordinate = coordinates[i];
        const beforeCount = presentMap.get(coordinate) || 0;
        presentMap.set(coordinate, beforeCount + 1);
    }

    const sortedUniqueCoordinates = [...presentMap.keys()].sort((a, b) => a - b);
    let answer = 0;

    for (let i = 0; i < sortedUniqueCoordinates.length; i++) {
        const currentCoordinate = sortedUniqueCoordinates[i];
        const includedCoordinates = [...new Array(M)].map((_, index) => currentCoordinate + index);
        const currentAnswer = includedCoordinates.reduce((acc, cur) => acc + (presentMap.get(cur) || 0), 0);
        answer = Math.max(answer, currentAnswer);
    }

    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
