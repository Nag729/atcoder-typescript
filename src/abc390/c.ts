export const Main = (inputList: string[]) => {
    const [H, W] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const sList = inputList.slice(1);

    // NOTE: 黒く塗られた行・列indexの最小・最大を記録
    let minRowIndex = 10000;
    let maxRowIndex = -1;
    let minColIndex = 10000;
    let maxColIndex = -1;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (sList[i][j] === "#") {
                minRowIndex = Math.min(minRowIndex, i);
                maxRowIndex = Math.max(maxRowIndex, i);
                minColIndex = Math.min(minColIndex, j);
                maxColIndex = Math.max(maxColIndex, j);
            }
        }
    }

    // NOTE: (minRow, minCol) ~ (maxRow, maxCol) の範囲に白が存在したらアウト
    let isOk = true;
    for (let i = minRowIndex; i <= maxRowIndex; i++) {
        for (let j = minColIndex; j <= maxColIndex; j++) {
            if (sList[i][j] === ".") {
                isOk = false;
            }
        }
    }

    console.log(isOk ? "Yes" : "No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
