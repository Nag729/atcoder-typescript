export const Main = (inputList: string[]) => {
    const S: string[] = inputList[1].split("");

    if (!S.includes("-") || !S.includes("o")) {
        console.log(-1);
        return;
    }

    let ans: number = -1;
    ans = Math.max(ans, calculateMaxCount(S));
    ans = Math.max(ans, calculateMaxCount(S.reverse()));

    console.log(ans);
};

const calculateMaxCount = (S: string[]): number => {
    const firstHyphenIndex: number = S.indexOf("-");
    const slicedS = S.slice(firstHyphenIndex);

    let localMax: number = -1;
    let count: number = -1;

    for (let i = 0; i < slicedS.length; i++) {
        if (slicedS[i] === "-") {
            localMax = Math.max(localMax, count);
            count = -1;
        } else {
            if (count === -1) count = 1;
            else count++;
        }
    }
    return Math.max(localMax, count);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
