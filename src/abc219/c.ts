export const Main = (inputList: string[]) => {
    const X: string = inputList[0];
    const N: number = parseInt(inputList[1], 10);
    const sList: string[] = inputList.slice(2, 2 + N);

    // key: alphabet, value: order
    const orderMap: Map<string, number> = new Map();
    for (let i = 0; i < 26; i++) {
        orderMap.set(X[i], i);
    }

    const sortedNameList: string[] = sList.sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) {
                return orderMap.get(a[i])! - orderMap.get(b[i])!;
            }
        }
        return a.length - b.length;
    });
    console.log(sortedNameList.join("\n"));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
