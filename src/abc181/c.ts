type Point = { x: number; y: number };

export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const pointList: Point[] = [];
    for (let i = 0; i < N; i++) {
        const [x, y] = inputList[i + 1].split(" ").map((x) => parseInt(x, 10));
        pointList.push({ x, y });
    }
    pointList.sort((a, b) => a.y - b.y).sort((a, b) => a.x - b.x);

    let exist: boolean = false;
    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                const pointI: Point = pointList[i];
                const pointJ: Point = pointList[j];
                const pointK: Point = pointList[k];

                const ijSlope: number =
                    pointJ.x - pointI.x !== 0 ? (pointJ.y - pointI.y) / (pointJ.x - pointI.x) : Infinity;
                const jkSlope: number =
                    pointK.x - pointJ.x !== 0 ? (pointK.y - pointJ.y) / (pointK.x - pointJ.x) : Infinity;
                if (ijSlope === jkSlope) {
                    exist = true;
                    break;
                }
            }
        }
    }

    console.log(exist ? "Yes" : "No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
