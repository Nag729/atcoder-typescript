const digitCountList: { digits: number; count: number }[] = [
    { digits: 2, count: 9 },
    { digits: 4, count: 9 * 10 },
    { digits: 6, count: 9 * 10 * 10 },
    { digits: 8, count: 9 * 10 * 10 * 10 },
    { digits: 10, count: 9 * 10 * 10 * 10 * 10 },
];

// NOTE: 単純にループ回せばよかった問題
export const Main = (inputList: string[]) => {
    const strN: string = inputList[0];

    const digits: number = strN.length;
    const determinedCount: number = digitCountList
        .filter((dc) => dc.digits < digits)
        .reduce((acc, dc) => acc + dc.count, 0);

    if (digits % 2 !== 0) {
        console.log(determinedCount);
        return;
    }

    const firstHalfStr: string = strN.slice(0, digits / 2);
    const secondHalfStr: string = strN.slice(digits / 2, digits);
    const smallerHalf: string = Number(firstHalfStr) <= Number(secondHalfStr) ? firstHalfStr : secondHalfStr;

    const additionalCount: number = smallerHalf
        .split("")
        .map((s) => parseInt(s, 10))
        .reduce((acc, current, index) => acc * (index === 0 ? current : current + 1), 1);

    console.log(determinedCount + additionalCount);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
