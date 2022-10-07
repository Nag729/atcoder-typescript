export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);
    const aList: number[] = inputList[1].split(" ").map((v) => parseInt(v, 10));

    let ans = 0;
    for (let l = 0; l < N; l++) {
        const leftA = aList[l];
        let sum = 0;
        for (let r = l; r < N; r++) {
            const rightA = aList[r];
            if (leftA > rightA) {
                break;
            }
            sum += leftA;
        }
        ans = Math.max(ans, sum);
    }
    console.log(ans);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
