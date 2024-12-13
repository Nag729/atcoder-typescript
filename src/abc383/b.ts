type Position = { x: number; y: number };
const manhattanDistance = (a: Position, b: Position) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

export const Main = (inputList: string[]) => {
    const [H, W, D] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const floorMap: boolean[][] = inputList.slice(1).map((v) => v.split("").map((v) => v === "."));

    const floorPositions: Position[] = [];
    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            if (floorMap[y][x]) {
                floorPositions.push({ x, y });
            }
        }
    }

    let answer = 0;
    for (let i = 0; i < floorPositions.length; i++) {
        for (let j = i + 1; j < floorPositions.length; j++) {
            const a = floorPositions[i];
            const b = floorPositions[j];

            let count = 0;

            for (let k = 0; k < floorPositions.length; k++) {
                const c = floorPositions[k];
                if (manhattanDistance(a, c) <= D || manhattanDistance(b, c) <= D) {
                    count++;
                }
            }
            answer = Math.max(answer, count);
        }
    }
    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
