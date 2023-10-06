type Coodinate = {
    x: number;
    y: number;
};

const move = (current: Coodinate, command: "R" | "L" | "U" | "D"): Coodinate => {
    switch (command) {
        case "R":
            return { x: current.x + 1, y: current.y };
        case "L":
            return { x: current.x - 1, y: current.y };
        case "U":
            return { x: current.x, y: current.y + 1 };
        case "D":
            return { x: current.x, y: current.y - 1 };
    }
};

const createKey = (coodinate: Coodinate): string => `${coodinate.x},${coodinate.y}`;

export const Main = (inputList: string[]) => {
    const [N, M, H, K] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const S = inputList[1];

    const existItems: Record<string, boolean> = {};
    for (let i = 0; i < M; i++) {
        const [x, y] = inputList[i + 2].split(" ").map((v) => parseInt(v, 10));
        existItems[createKey({ x, y })] = true;
    }

    let current: Coodinate = { x: 0, y: 0 };
    let hp = H;

    for (let i = 0; i < N; i++) {
        const command = S[i] as "R" | "L" | "U" | "D";
        current = move(current, command);
        hp--;

        if (hp < 0) {
            console.log("No");
            return;
        }

        const key = createKey(current);
        if (existItems[key] && hp < K) {
            hp = K;
            existItems[key] = false;
        }
    }

    console.log("Yes");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
