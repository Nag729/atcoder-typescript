export const Main = (inputList: string[]) => {
    const [N, _T] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const aList = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const marked: Set<number> = new Set();

    // ななめ
    const diagonalNumbersToRight: number[] = [];
    const diagonalNumbersToLeft: number[] = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === j) {
                diagonalNumbersToRight.push(i * N + j + 1);
            }
            if (i + j === N - 1) {
                diagonalNumbersToLeft.push(i * N + j + 1);
            }
        }
    }

    for (let i = 0; i < aList.length; i++) {
        const a = aList[i];
        marked.add(a);

        // よこ
        const quotient = Math.ceil(a / N);
        const horizontalNumbers = [...Array(N).keys()].map((n) => N * (quotient - 1) + n + 1);

        // たて
        const remainder = a % N;
        const verticalNumbers = [...Array(N).keys()].map((n) => n * N + remainder);

        if (
            horizontalNumbers.every((v) => marked.has(v)) ||
            verticalNumbers.every((v) => marked.has(v)) ||
            diagonalNumbersToRight.every((v) => marked.has(v)) ||
            diagonalNumbersToLeft.every((v) => marked.has(v))
        ) {
            console.log(i + 1);
            return;
        }
    }

    console.log(-1);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
