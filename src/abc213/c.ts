export const Main = (input) => {
    const inputList = input.split("\n");
    const [H, W, N] = inputList[0].split(" ").map(Number);
    console.log(H, W, N);

    const cardList: number[][] = [];
    for (let i = 0; i < N; i++) {
        cardList.push(inputList[i + 1].split(" ").map(Number));
    }

    console.log(cardList);
    // 重複除いた column, row の中での順位を出力すればよさそう
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
