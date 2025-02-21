type Query = { type: "push"; len: number } | { type: "remove" } | { type: "output"; index: number };

export const Main = (inputList: string[]) => {
    // const Q: number = parseInt(inputList[0], 10);
    const queries: Query[] = inputList.slice(1).map((v) => {
        const [type, n] = v.split(" ");
        switch (type) {
            case "1":
                return { type: "push", len: parseInt(n, 10) };
            case "2":
                return { type: "remove" };
            case "3":
                return { type: "output", index: parseInt(n, 10) };
            default:
                throw new Error(`Unexpected type: ${type}`);
        }
    });

    const allSnakeCumulativeSums: number[] = [0];
    let removedSnakeCount = 0;

    for (const query of queries) {
        switch (query.type) {
            case "push":
                allSnakeCumulativeSums.push(query.len + allSnakeCumulativeSums[allSnakeCumulativeSums.length - 1]);
                break;
            case "remove":
                removedSnakeCount++;
                break;
            case "output":
                const currentIndex = query.index - 1 + removedSnakeCount;
                console.log(allSnakeCumulativeSums[currentIndex] - allSnakeCumulativeSums[removedSnakeCount]);
                break;
            default:
                throw new Error(`Unexpected type: ${query}`);
        }
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
