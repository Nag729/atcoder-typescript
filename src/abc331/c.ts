export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));
    const sortedAList = aList.slice().sort((a, b) => b - a);

    let cumulativeSum = 0;
    let checkingNum = sortedAList[0];
    const answerMap = new Map<number, number>([[checkingNum, 0]]);

    for (let i = 0; i < N; i++) {
        const a = sortedAList[i];

        if (a !== checkingNum) {
            answerMap.set(a, cumulativeSum);
        }

        cumulativeSum += a;
        checkingNum = a;
    }

    const answerList = aList.map((a) => answerMap.get(a)!);
    console.log(answerList.join(" "));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
