type Point = {
    x: number;
    y: number;
    z: number;
};

const isIntersecting = (a1: Point, a2: Point, b1: Point, b2: Point): boolean => {
    const overlapLength = (minA: number, maxA: number, minB: number, maxB: number) =>
        Math.max(0, Math.min(maxA, maxB) - Math.max(minA, minB));

    const overlapX = overlapLength(
        Math.min(a1.x, a2.x),
        Math.max(a1.x, a2.x),
        Math.min(b1.x, b2.x),
        Math.max(b1.x, b2.x),
    );
    const overlapY = overlapLength(
        Math.min(a1.y, a2.y),
        Math.max(a1.y, a2.y),
        Math.min(b1.y, b2.y),
        Math.max(b1.y, b2.y),
    );
    const overlapZ = overlapLength(
        Math.min(a1.z, a2.z),
        Math.max(a1.z, a2.z),
        Math.min(b1.z, b2.z),
        Math.max(b1.z, b2.z),
    );

    return overlapX * overlapY * overlapZ > 0;
};

export const Main = (inputList: string[]) => {
    const [a, b, c, d, e, f]: number[] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const [g, h, i, j, k, l]: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));
    const a1: Point = { x: a, y: b, z: c };
    const a2: Point = { x: d, y: e, z: f };
    const b1: Point = { x: g, y: h, z: i };
    const b2: Point = { x: j, y: k, z: l };

    if (isIntersecting(a1, a2, b1, b2)) {
        console.log("Yes");
        return;
    }

    console.log("No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
