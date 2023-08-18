export const Main = (inputList: string[]) => {
    // const [N, M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const S = inputList[1];
    const colors = inputList[2].split(" ").map((v) => parseInt(v, 10));

    const strMap = new Map<number, string[]>();
    for (let sIndex = 0; sIndex < S.length; sIndex++) {
        const color = colors[sIndex];
        if (!strMap.has(color)) {
            strMap.set(color, []);
        }
        strMap.get(color)!.push(S[sIndex]);
    }

    let ans = "";
    const countMap = new Map<number, number>();

    for (let c = 0; c < colors.length; c++) {
        if (!countMap.has(colors[c])) {
            countMap.set(colors[c], -1);
        }

        const count = countMap.get(colors[c])!;
        const strList = strMap.get(colors[c])!;

        ans += count === -1 ? strList[strList.length - 1] : strList[count];
        countMap.set(colors[c], count + 1);
    }
    console.log(ans);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
