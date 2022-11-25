export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const originalSet: Set<string> = new Set();
    const scoreList: number[] = [];
    for (let i = 0; i < N; i++) {
        const [S, T] = inputList[i + 1].split(" ");

        if (originalSet.has(S)) {
            scoreList.push(-1);
            continue;
        }
        originalSet.add(S);
        scoreList.push(parseInt(T, 10));
    }

    let bestIndex: number = 0;
    let bestScore: number = -1;
    for (let i = 0; i < N; i++) {
        if (scoreList[i] > bestScore) {
            bestIndex = i;
            bestScore = scoreList[i];
        }
    }
    console.log(bestIndex + 1);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
