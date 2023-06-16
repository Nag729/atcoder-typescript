type Position = { x: number; y: number };

const calculateDistance = (p1: Position, p2: Position): number => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
};

export const Main = (inputList: string[]) => {
    const [N, D] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const positionList: Position[] = inputList.slice(1).map((v) => {
        const [x, y] = v.split(" ").map((v) => parseInt(v, 10));
        return { x, y };
    });

    const canReach: boolean[][] = [...Array(N)].map(() => [...Array(N)].map(() => false));
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            if (calculateDistance(positionList[i], positionList[j]) <= D) {
                canReach[i][j] = true;
                canReach[j][i] = true;
            }
        }
    }

    const reachableSet: Set<number> = new Set([0]);
    const stack: number[] = [0];
    while (stack.length > 0) {
        const current: number = stack.pop()!;
        for (let i = 0; i < N; i++) {
            if (canReach[current][i] && !reachableSet.has(i)) {
                reachableSet.add(i);
                stack.push(i);
            }
        }
    }

    const answer: string = [...Array(N)].map((_, i) => (reachableSet.has(i) ? "Yes" : "No")).join("\n");
    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
