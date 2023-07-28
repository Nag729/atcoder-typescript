export const Main = (inputList: string[]) => {
    const [N, K] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const map: Map<number, number> = new Map(); // key: days, value: sumCount

    for (let i = 0; i < N; i++) {
        const [days, count] = inputList[i + 1].split(" ").map((v) => parseInt(v, 10));

        const beforeCount = map.get(days) !== undefined ? map.get(days)! : 0;
        map.set(days, beforeCount + count);
    }

    const sortedList = [...map.entries()].sort(([daysA], [daysB]) => daysA - daysB);
    let totalCount: number = sortedList.reduce((acc, [_, count]) => acc + count, 0);

    if (totalCount <= K) {
        console.log(1);
        return;
    }

    for (let [days, count] of sortedList) {
        totalCount -= count;

        if (totalCount <= K) {
            console.log(days + 1);
            break;
        }
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
