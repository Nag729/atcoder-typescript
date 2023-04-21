export const Main = (inputList: string[]) => {
    // const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    // NOTE: key: a, value: count
    const map: Map<number, number> = new Map();
    for (let i = 0; i < aList.length; i++) {
        const a: number = aList[i];
        const updatedCount: number = map.get(a) !== undefined ? map.get(a)! + 1 : 1;
        map.set(a, updatedCount);
    }

    let sum: number = 0;
    const uniqueAList: number[] = [...map.keys()];

    for (let i = 0; i < uniqueAList.length - 1; i++) {
        for (let j = i + 1; j < uniqueAList.length; j++) {
            const x: number = uniqueAList[i];
            const y: number = uniqueAList[j];
            const countX: number = map.get(x)!;
            const countY: number = map.get(y)!;
            sum += (x - y) ** 2 * countX * countY;
        }
    }

    console.log(sum);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
