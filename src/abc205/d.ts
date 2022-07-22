// FIXME: RE
export const Main = (input) => {
    // input
    const inputList = input.split("\n");
    const [N, Q] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const kList: number[] = [];
    for (let i = 0; i < Q; i++) {
        kList.push(parseInt(inputList[i + 2], 10));
    }

    // create answerList
    const answerList: number[] = [];
    aList.sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        const isFirst = i === 0;
        const isLast = i === N - 1;

        const addStart = isFirst ? 1 : aList[i - 1] + 1;
        const addEnd = aList[i] - 1;
        for (let j = addStart; j <= addEnd; j++) {
            answerList.push(j);
        }

        if (isLast) {
            answerList.push(aList[i] + 1);
        }
    }

    // output
    for (let i = 0; i < Q; i++) {
        const k = kList[i];
        const len = answerList.length;

        const answer = k <= len ? answerList[k - 1] : answerList[len - 1] + (k - len);
        console.log(answer);
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
