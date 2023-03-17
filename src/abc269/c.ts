export const Main = (inputList: string[]) => {
    const N: bigint = BigInt(inputList[0]);
    const binaryN: string = N.toString(2);

    const answerList: bigint[] = [BigInt(0)];

    for (let i = 0; i < binaryN.length; i++) {
        const digit = binaryN[binaryN.length - 1 - i];

        if (digit === "1") {
            const base = BigInt(Math.pow(2, i));
            const newAnswerList = answerList.map((answer) => base + answer);
            answerList.push(...newAnswerList);
        }
    }

    console.log(answerList.join("\n"));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
