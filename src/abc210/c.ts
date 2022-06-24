const pickedColorSet = new Set<number>();
const pickedColorMap = new Map<number, number>();

const incrementCandyCount = (key: number): void => {
    const count = pickedColorMap.get(key) || 0;
    pickedColorMap.set(key, count + 1);
    pickedColorSet.add(key);
};

const decrementCandyCount = (key: number): void => {
    const count = pickedColorMap.get(key)!;
    if (count === 1) {
        pickedColorMap.delete(key);
        pickedColorSet.delete(key);
        return;
    }
    pickedColorMap.set(key, count - 1);
};

export const Main = (input) => {
    const inputList = input.split("\n").filter((x) => x !== "");
    const [N, K] = inputList[0].split(" ").map((x) => parseInt(x, 10));
    const candyColorList = inputList[1].split(" ").map((x) => parseInt(x, 10));

    // initialize
    for (let i = 0; i < K; i++) {
        incrementCandyCount(candyColorList[i]);
    }
    let max = pickedColorSet.size;

    for (let i = K; i < N; i++) {
        incrementCandyCount(candyColorList[i]);
        decrementCandyCount(candyColorList[i - K]);
        max = Math.max(max, pickedColorSet.size);
    }

    console.log(max);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
