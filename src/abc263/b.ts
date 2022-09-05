export const Main = (inputList: string[]) => {
    const pList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    let count = 1;
    let nextParent = pList.pop()!;
    while (true) {
        if (nextParent === 1) {
            break;
        }
        count++;
        nextParent = pList[nextParent - 2];
    }

    console.log(count);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
