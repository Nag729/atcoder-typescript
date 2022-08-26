type Query = {
    t: 1 | 2;
    a: number;
    b: number;
};

const correctIndex = (index: number, N: number, isReversed: boolean): { isFirstHalf: boolean; index: number } => {
    if (index <= N) {
        if (!isReversed) {
            return { isFirstHalf: true, index };
        } else {
            return { isFirstHalf: false, index: index - N };
        }
    }
    if (!isReversed) {
        return { isFirstHalf: false, index };
    } else {
        return { isFirstHalf: true, index: 2 * N - index };
    }
};

export const Main = (input) => {
    const inputList = input.split("\n");
    const N: number = parseInt(inputList[0], 10);
    const sList: string[] = [...inputList[1]];
    const Q: number = parseInt(inputList[2], 10);

    const queryList: Query[] = [];
    for (let i = 0; i < Q; i++) {
        const [t, a, b] = inputList[i + 3].split(" ").map((v) => parseInt(v, 10));
        queryList.push({ t, a, b });
    }

    const firstHalfList = sList.slice(0, sList.length / 2);
    const secondHalfList = sList.slice(sList.length / 2);

    console.log(firstHalfList, secondHalfList);

    let isReversed = false;
    for (const query of queryList) {
        if (query.t === 2) {
            isReversed = !isReversed;
            continue;
        }

        // NOTE: t === 1
        const a = correctIndex(query.a, N, isReversed);
        const b = correctIndex(query.b, N, isReversed);

        console.log(a, b);

        const beforeA = a.isFirstHalf ? firstHalfList[a.index] : secondHalfList[a.index];
        const beforeB = b.isFirstHalf ? firstHalfList[b.index] : secondHalfList[b.index];

        a.isFirstHalf ? (firstHalfList[a.index] = beforeB) : (secondHalfList[a.index] = beforeB);
        b.isFirstHalf ? (firstHalfList[b.index] = beforeA) : (secondHalfList[b.index] = beforeA);
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
