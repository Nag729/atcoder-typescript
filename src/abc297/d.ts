export const Main = (inputList: string[]) => {
    let [A, B] = inputList[0].split(" ").map((v) => BigInt(v));

    let max: bigint = A >= B ? A : B;
    let min: bigint = A > B ? B : A;
    let count: bigint = 0n;

    while (true) {
        const quotient: bigint = max / min; // 商

        if (max % min === 0n) {
            console.log(String(count + quotient - 1n));
            return;
        }

        const tmp: bigint = max - min * quotient;
        max = min;
        min = tmp;
        count = count + quotient;
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
