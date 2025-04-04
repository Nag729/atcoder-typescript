export const Main = (inputList: string[]) => {
    const N = Number(inputList[0]);
    const collectors: { q: number; r: number }[] = [];
    for (let i = 0; i < N; i++) {
        const [q, r] = inputList[i + 1].split(" ").map(Number);
        collectors.push({ q, r });
    }

    const Q = Number(inputList[N + 1]);
    const queries: { t: number; d: number }[] = [];
    for (let i = 0; i < Q; i++) {
        const [t, d] = inputList[i + N + 2].split(" ").map(Number);
        queries.push({ t, d });
    }

    const answers = queries.map((query) => {
        const collector = collectors[query.t - 1];

        const quotient = Math.floor(query.d / collector.q);
        const remainder = query.d % collector.q;

        const numberToMultiply = remainder > collector.r ? quotient + 1 : quotient;
        return collector.q * numberToMultiply + collector.r;
    });

    console.log(answers.join("\n"));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
