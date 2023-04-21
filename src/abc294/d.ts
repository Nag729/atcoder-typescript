export const Main = (inputList: string[]) => {
    const [N, Q] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const eventList: string[] = [];
    for (let i = 0; i < Q; i++) {
        eventList.push(inputList[i + 1]);
    }

    const people: number[] = [...new Array(N)].map((_, i) => i + 1);
    const waitingSet: Set<number> = new Set();
    const calledList: number[] = [];

    for (const event of eventList) {
        const [c, x] = event.split(" ").map((v) => parseInt(v, 10));
        if (c === 1) {
            waitingSet.add(people.shift()!);
            continue;
        }
        if (c === 2) {
            waitingSet.delete(x);
            continue;
        }
        // c === 3
        calledList.push(Math.min(...waitingSet));
    }

    console.log(calledList.join(`\n`));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
