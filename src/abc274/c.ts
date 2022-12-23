export const Main = (inputList: string[]) => {
    // const N: number = parseInt(inputList[0], 10);
    const parentList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const map: Map<number, number> = new Map();
    map.set(1, 0);

    parentList.forEach((parent: number, index: number) => {
        const leftChild: number = (index + 1) * 2;
        const rightChild: number = (index + 1) * 2 + 1;
        const generationCount: number = map.get(parent)! + 1;

        map.set(leftChild, generationCount);
        map.set(rightChild, generationCount);
    });

    for (const value of map.values()) {
        console.log(value);
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
