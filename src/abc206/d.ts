export const Main = (input) => {
    const inputList = input.split("\n");
    const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const firstHalf = aList.slice(0, Math.floor(N / 2));
    const secondHalf = aList.slice(Math.ceil(N / 2)).reverse();

    const differentSet: Set<number> = new Set();
    const checkLen: number = Math.floor(N / 2);

    for (let i = 0; i < checkLen; i++) {
        const first = firstHalf[i];
        const second = secondHalf[i];
        if (first !== second) {
            differentSet.add(first);
            differentSet.add(second);
        }
    }
    console.log(Math.max(0, differentSet.size - 1));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
