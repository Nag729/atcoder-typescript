export const Main = (inputList: string[]) => {
    const [H, _W] = inputList[0].split(" ").map((v) => parseInt(v, 10));

    const sList: string[][] = [];

    for (let i = 0; i < H; i++) {
        const charList: string[] = inputList[i + 1].split("");
        sList.push(charList);
    }

    // NOTE: 縦・横・斜めで見ようとすると座標の変換がつらいので、起点と方向だけ決めて座標を出力する
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
