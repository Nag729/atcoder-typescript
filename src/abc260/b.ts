const scoreListToRankList = (scoreList: number[]): number[] => {
    return scoreList
        .map((v, i) => ({ score: v, index: i }))
        .sort((a, b) => b.score - a.score)
        .map((v) => v.index);
};

const passedSet: Set<number> = new Set();
const addPassingPersonToSet = (rankList: number[], successfulCount: number): void => {
    let checkingIndex: number = 0;
    let passedCount: number = 0;

    while (passedCount < successfulCount) {
        const personIndex: number = rankList[checkingIndex];
        if (passedSet.has(personIndex)) {
            checkingIndex++;
            continue;
        }
        passedSet.add(personIndex);
        checkingIndex++;
        passedCount++;
    }
};

export const Main = (inputList: string[]) => {
    const [_N, X, Y, Z] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const enList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));
    const mathList: number[] = inputList[2].split(" ").map((v) => parseInt(v, 10));
    const sumList: number[] = enList.map((v, i) => v + mathList[i]);

    const enRankList: number[] = scoreListToRankList(enList);
    const mathRankList: number[] = scoreListToRankList(mathList);
    const sumRankList: number[] = scoreListToRankList(sumList);

    addPassingPersonToSet(enRankList, X);
    addPassingPersonToSet(mathRankList, Y);
    addPassingPersonToSet(sumRankList, Z);

    console.log(
        [...passedSet]
            .sort((a, b) => a - b)
            .map((index) => index + 1)
            .join("\n"),
    );
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
