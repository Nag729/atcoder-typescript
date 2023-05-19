export const Main = (inputList: string[]) => {
    const S: string = inputList[0];
    const T: string = inputList[1];

    // key: character, value: count
    const charCountMap: Map<string, number> = new Map();
    let atmarkCount: number = 0;

    S.split("").forEach((c) => {
        if (c === "@") {
            atmarkCount++;
            return;
        }
        const count = charCountMap.get(c) || 0;
        charCountMap.set(c, count + 1);
    });

    T.split("").forEach((c) => {
        if (c === "@") {
            atmarkCount++;
            return;
        }
        const count = charCountMap.get(c) || 0;
        charCountMap.set(c, count - 1);
    });

    charCountMap.forEach((count, key) => {
        if (count === 0) charCountMap.delete(key);
    });

    const includesOtherThanAtcoder: boolean =
        [...charCountMap.keys()].filter((c) => !["a", "t", "c", "o", "d", "e", "r"].includes(c)).length > 0;
    if (includesOtherThanAtcoder) {
        console.log("No");
        return;
    }

    const totalMismatchCount: number = [...charCountMap.values()].reduce((acc, cur) => acc + Math.abs(cur), 0);
    console.log(atmarkCount >= totalMismatchCount ? "Yes" : "No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
