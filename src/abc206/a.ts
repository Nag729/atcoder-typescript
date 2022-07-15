const createMessage = (price: number): string => {
    const REGULAR_PRICE = 206;
    if (price < REGULAR_PRICE) return `Yay!`;
    if (price === REGULAR_PRICE) return `so-so`;
    return `:(`;
};

export const Main = (input) => {
    const inputList = input.split("\n");
    const N = parseInt(inputList[0], 10);
    const price = Math.floor(N * 1.08);
    console.log(createMessage(price));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
