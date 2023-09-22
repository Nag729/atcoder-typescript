export const Main = (inputList: string[]) => {
    const [N, D, P] = inputList[0].split(" ").map((v) => parseInt(v, 10));

    const prices = inputList[1]
        .split(" ")
        .map((v) => parseInt(v))
        .sort((a, b) => b - a); // sort desc

    const normalSumPrice = prices.reduce((acc, cur) => acc + cur, 0);
    let answer = normalSumPrice;

    for (let i = 0; i < Math.ceil(N / D); i++) {
        const normalPrices = prices.slice(i * D, i * D + D).reduce((acc, cur) => acc + cur, 0);
        if (normalPrices > P) {
            answer -= normalPrices - P;
        } else {
            break;
        }
    }

    console.log(answer.toString());
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
