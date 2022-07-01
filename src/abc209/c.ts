const MOD = 1_000_000_007;

export const Main = (input) => {
    const inputList = input.split("\n");
    const cList: number[] = inputList[1].split(" ").map((x) => parseInt(x, 10));

    // TODO: BigInt にしたらたぶん通る
    cList.sort((a, b) => a - b); // sort asc
    const ans = cList.reduce((res, c, index) => {
        const possibleCount = Math.max(c - index, 0);
        return (res * possibleCount) % MOD;
    }, 1);
    console.log(ans);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
