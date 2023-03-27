const isValidNumber = (strNum: string): boolean => {
    if (strNum === "" || strNum.startsWith("0")) {
        return false;
    }
    return true;
};

export const Main = (inputList: string[]) => {
    const nStr: string = inputList[0];
    const sortedNumList: number[] = [...nStr].map((v) => parseInt(v, 10)).sort((a, b) => b - a);
    const len: number = sortedNumList.length;

    let answer: number = -1;

    // bit全探索
    for (let i = 0; i < Math.pow(2, len); i++) {
        let a: string = "";
        let b: string = "";

        for (let j = 0; j < len; j++) {
            if ((i >> j) & 1) {
                a += sortedNumList[j];
            } else {
                b += sortedNumList[j];
            }
        }

        if (!isValidNumber(a) || !isValidNumber(b)) {
            continue;
        }

        const result: number = parseInt(a, 10) * parseInt(b, 10);
        answer = Math.max(answer, result);
    }

    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
