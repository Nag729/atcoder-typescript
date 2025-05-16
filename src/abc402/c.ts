export const Main = (inputList: string[]) => {
    const [_N, M] = inputList[0].split(" ").map(Number);
    const usedFoodSets: Set<number>[] = [];
    for (let i = 1; i <= M; i++) {
        const A = inputList[i].split(" ").map(Number).slice(1);
        usedFoodSets.push(new Set(A));
    }
    const B = inputList[M + 1].split(" ").map(Number);

    for (const b of B) {
        let ans = 0;
        for (const usedFoodSet of usedFoodSets) {
            usedFoodSet.delete(b);
            if (usedFoodSet.size === 0) {
                ans++;
            }
        }
        console.log(ans);
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
