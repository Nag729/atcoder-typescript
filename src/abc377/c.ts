type Coodinate = { a: number; b: number };

const createBannedCoodinates = (N: number, coodinate: Coodinate): string[] => {
    return [
        { a: coodinate.a, b: coodinate.b },
        { a: coodinate.a + 2, b: coodinate.b + 1 },
        { a: coodinate.a + 1, b: coodinate.b + 2 },
        { a: coodinate.a - 1, b: coodinate.b + 2 },
        { a: coodinate.a - 2, b: coodinate.b + 1 },
        { a: coodinate.a - 2, b: coodinate.b - 1 },
        { a: coodinate.a - 1, b: coodinate.b - 2 },
        { a: coodinate.a + 1, b: coodinate.b - 2 },
        { a: coodinate.a + 2, b: coodinate.b - 1 },
    ]
        .filter((v) => v.a >= 1 && v.a <= N && v.b >= 1 && v.b <= N)
        .map((v) => `${v.a}_${v.b}`);
};

export const Main = (inputList: string[]) => {
    const [N, M] = inputList[0].split(" ").map((x) => parseInt(x));

    const coodinates: Coodinate[] = [];
    for (let i = 0; i < M; i++) {
        const [a, b] = inputList[i + 1].split(" ").map((x) => parseInt(x));
        coodinates.push({ a, b });
    }

    const bannedCoodinateSet = new Set<string>(coodinates.flatMap((coodinate) => createBannedCoodinates(N, coodinate)));
    const bigIntAnswer = BigInt(N) ** BigInt(2) - BigInt(bannedCoodinateSet.size);
    console.log(bigIntAnswer.toString());
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
