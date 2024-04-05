export const Main = (inputList: string[]) => {
    const [_N, Q] = inputList[0].split(" ").map((x) => parseInt(x));
    const S = inputList[1];

    const questions: { l: number; r: number }[] = [];
    for (let i = 0; i < Q; i++) {
        const [l, r] = inputList[i + 2].split(" ").map((x) => parseInt(x));
        questions.push({ l, r });
    }

    // どっかの添え字が間違ってる
    const counts = new Array(S.length).fill(0);
    for (let i = 1; i < S.length - 1; i++) {
        if (S[i] === S[i + 1]) {
            counts[i] = 1;
        }
    }

    const sums = new Array(S.length).fill(0);
    for (let i = 1; i < S.length; i++) {
        sums[i] = sums[i - 1] + counts[i];
    }

    questions.forEach((q) => {
        console.log(sums[q.r - 1] - sums[q.l - 1]);
    });
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
