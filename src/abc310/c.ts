export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const sSet: Set<string> = new Set();
    for (let i = 1; i <= N; i += 1) {
        const s: string = inputList[i];
        const revertedS: string = s.split("").reverse().join("");

        if (!(sSet.has(s) || sSet.has(revertedS))) {
            sSet.add(inputList[i]);
        }
    }

    console.log(sSet.size);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
