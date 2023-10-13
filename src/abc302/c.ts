const isConnected = (s1: string, s2: string): boolean => {
    let count: number = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            count++;
        }
    }
    return count === s1.length - 1;
};

const exploreRecursively = (current: string, rest: string[]): boolean => {
    for (let i = 0; i < rest.length; i++) {
        if (!isConnected(current, rest[i])) {
            continue;
        }

        const next: string = rest[i];
        const nextRest: string[] = rest.filter((v) => v !== next);
        if (nextRest.length === 0) {
            return true;
        } else if (exploreRecursively(next, nextRest)) {
            return true;
        }
    }

    return false;
};

export const Main = (inputList: string[]) => {
    const [N, _M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const sList = inputList.slice(1, N + 1);

    for (let i = 0; i < N; i++) {
        const current: string = sList[i];
        const rest: string[] = sList.filter((v) => v !== current);

        if (exploreRecursively(current, rest)) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
