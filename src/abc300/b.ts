const countSharp = (l: boolean[][]): { rowCountList: number[]; colCountList: number[] } => {
    return {
        rowCountList: l.map((row) => row.filter((v) => v).length),
        colCountList: l[0].map((_, i) => l.map((row) => row[i]).filter((v) => v).length),
    };
};

const isSameWithShift = (a: number[], b: number[]): boolean => {
    for (let i = 0; i < a.length; i++) {
        const shiftedA = [...a.slice(i), ...a.slice(0, i)];
        if (shiftedA.every((v, i) => v === b[i])) {
            return true;
        }
    }
    return false;
};

type Cell = "." | "#";

export const Main = (inputList: string[]) => {
    const [H, _W] = inputList[0].split(" ").map((str) => Number(str));

    // input
    const a: boolean[][] = [];
    for (let i = 0; i < H; i++) {
        const row = inputList[i + 1].split("") as Cell[];
        a.push(row.map((str) => str === "#"));
    }
    const b: boolean[][] = [];
    for (let i = 0; i < H; i++) {
        const row = inputList[i + 1 + H].split("") as Cell[];
        b.push(row.map((str) => str === "#"));
    }

    const { rowCountList: aRowCountList, colCountList: aColCountList } = countSharp(a);
    const { rowCountList: bRowCountList, colCountList: bColCountList } = countSharp(b);

    const isOk: boolean =
        isSameWithShift(aRowCountList, bRowCountList) && isSameWithShift(aColCountList, bColCountList);
    console.log(isOk ? "Yes" : "No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
