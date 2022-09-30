export const Main = (inputList: string[]) => {
    const [H, W] = inputList[0].split(" ").map(Number);

    const grid: string[][] = [];
    const checked: boolean[][] = [];
    for (let i = 0; i < H; i++) {
        const row = inputList[i + 1].split("");
        grid.push(row);
        checked.push(row.map(() => false));
    }

    let i = 0;
    let j = 0;

    while (true) {
        const s = grid[i][j];

        let nextI = i;
        let nextJ = j;

        if (s === "U") nextI = Math.max(0, i - 1);
        if (s === "R") nextJ = Math.min(W - 1, j + 1);
        if (s === "D") nextI = Math.min(H - 1, i + 1);
        if (s === "L") nextJ = Math.max(0, j - 1);

        if (nextJ === j && nextI === i) {
            console.log(i + 1, j + 1);
            return;
        }

        if (checked[nextI][nextJ]) {
            console.log(-1);
            return;
        }

        j = nextJ;
        i = nextI;
        checked[i][j] = true;
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
