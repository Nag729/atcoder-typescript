export const Main = (inputList: string[]) => {
    const [N, M] = inputList[0].split(" ").map((str) => Number(str));
    const aList: number[] = inputList[1].split(" ").map((str) => Number(str));

    const checkList: boolean[][] = [...Array(N)].map(() => [...Array(M)].map(() => false));
    const scoreList: number[] = [...Array(N)].map((_, index) => index + 1); // NOTE: ボーナスを追加

    // build initial checkList & scoreList
    for (let n = 0; n < N; n++) {
        const charList = inputList[n + 2].split("") as ("o" | "x")[];

        for (let m = 0; m < M; m++) {
            if (charList[m] === "o") {
                checkList[n][m] = true;
                scoreList[n] = scoreList[n] + aList[m];
            }
        }
    }

    const maxScore = Math.max(...scoreList);
    const sortedAIndexList = aList
        .map((score, index) => ({ score, index }))
        .sort((a, b) => b.score - a.score)
        .map((a) => a.index);

    // output answer for each person
    for (let n = 0; n < N; n++) {
        let score = scoreList[n];
        let count = 0;

        for (let index of sortedAIndexList) {
            if (score >= maxScore) break;
            if (checkList[n][index]) continue;

            score += aList[index];
            count++;
        }

        console.log(count);
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
