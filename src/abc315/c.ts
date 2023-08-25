type Taste = number;
type Deliciousness = number;

export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const top2PerTaste: Map<Taste, Deliciousness[]> = new Map();

    for (let i = 0; i < N; i++) {
        const [taste, deliciousness] = inputList[i + 1].split(" ").map((x: string): number => parseInt(x, 10));

        if (!top2PerTaste.has(taste)) {
            top2PerTaste.set(taste, [0, 0]);
        }

        const top2: Deliciousness[] = top2PerTaste.get(taste)!;
        if (deliciousness > top2[0]) {
            top2[1] = top2[0];
            top2[0] = deliciousness;
        } else if (deliciousness > top2[1]) {
            top2[1] = deliciousness;
        }
        top2PerTaste.set(taste, top2);
    }

    // find most delicious one
    let maxDeliciousness: Deliciousness = 0;
    let maxDeliciousnessTaste: Taste = -1;

    for (const [taste, [top]] of top2PerTaste) {
        const deliciousness: number = top;
        if (deliciousness > maxDeliciousness) {
            maxDeliciousness = deliciousness;
            maxDeliciousnessTaste = taste;
        }
    }

    // find second most delicious one
    let secondMaxDeliciousness: Deliciousness = 0;
    for (const [taste, [top, top2]] of top2PerTaste) {
        secondMaxDeliciousness = Math.max(secondMaxDeliciousness, taste === maxDeliciousnessTaste ? top2 / 2 : top);
    }

    console.log(maxDeliciousness + secondMaxDeliciousness);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
