const calculateSum = (min: number, max: number): number => {
    return ((max - min + 1) * (min + max)) / 2;
};

export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const numberRangeList: { min: number; max: number }[] = [];
    for (let i = 0; i < N; i++) {
        const [min, max] = inputList[i + 1].split(" ").map((x) => parseInt(x, 10));
        numberRangeList.push({ min, max });
    }

    let sum: number = 0;
    for (let i = 0; i < N; i++) {
        const { min, max } = numberRangeList[i];
        sum += calculateSum(min, max);
    }
    console.log(sum);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
