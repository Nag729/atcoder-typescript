const convertToNumberString = (str: string): string => {
    return str.replace(/#/g, "1").replace(/\./g, "0");
};

export const Main = (inputList: string[]) => {
    const [H, W] = inputList[0].split(" ").map((v) => parseInt(v, 10));

    const sList: string[] = inputList.slice(1, H + 1);
    const tList: string[] = inputList.slice(H + 1, H * 2 + 1);

    const sColumnList: string[] = [];
    const tColumnList: string[] = [];
    for (let i = 0; i < W; i++) {
        sColumnList.push(sList.map((v) => convertToNumberString(v.slice(i, i + 1))).join(""));
        tColumnList.push(tList.map((v) => convertToNumberString(v.slice(i, i + 1))).join(""));
    }

    sColumnList.sort();
    tColumnList.sort();

    for (let i = 0; i < W; i++) {
        if (sColumnList[i] !== tColumnList[i]) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
