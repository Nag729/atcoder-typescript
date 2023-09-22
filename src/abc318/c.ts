export const Main = (inputList: string[]) => {
    const [strN, strD, strP] = inputList[0].split(" ");
    const N = parseInt(strN);
    const D = parseInt(strD);
    const P = BigInt(strP);

    const prices = inputList[1]
        .split(" ")
        .map((v) => BigInt(v))
        .sort((a, b) => (a > b ? -1 : 1)); // sort desc

    const normalSumPrice = prices.reduce((acc, cur) => acc + cur, 0n);
    let answer = normalSumPrice;

    for (let i = 0; i < Math.ceil(N / D); i++) {
        const normalPrices = prices.slice(i * D, i * D + D).reduce((acc, cur) => acc + cur, 0n);
        if (normalPrices > P) {
            answer -= normalPrices - P;
        } else {
            break;
        }
    }

    console.log(answer.toString());
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
