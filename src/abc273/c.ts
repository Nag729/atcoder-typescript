export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const sortedUniqueAList: number[] = [...new Set(aList)].sort((a, b) => a - b);
    const uniqueLen: number = sortedUniqueAList.length;

    // key: a, value: upperCount
    const aUpperCountMap: Map<number, number> = new Map();
    sortedUniqueAList.forEach((a, idx) => {
        const upperCount: number = uniqueLen - 1 - idx;
        aUpperCountMap.set(a, upperCount);
    });

    const upperCountList: number[] = aList.map((a) => aUpperCountMap.get(a)!);

    // key: upperCount, value: count
    const resultMap: Map<number, number> = new Map();
    upperCountList.forEach((upperCount) => {
        const count: number = resultMap.get(upperCount) || 0;
        resultMap.set(upperCount, count + 1);
    });

    const output: string = [...Array(N).keys()].map((k) => resultMap.get(k) || 0).join("\n");
    console.log(output);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
