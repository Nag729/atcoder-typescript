export const Main = (inputList: string[]) => {
    const N: number = parseInt(inputList[0], 10);

    const repunits = [...Array(12)].map((_, i) => {
        const repunit = Array(i + 1)
            .fill(1)
            .join("");
        return parseInt(repunit, 10);
    });

    let count = 0;
    for (let i = 0; i < repunits.length; i++) {
        for (let j = 0; j < repunits.length; j++) {
            for (let k = 0; k < repunits.length; k++) {
                count++;
                if (count === N) {
                    const sum = repunits[i] + repunits[j] + repunits[k];
                    console.log(sum);
                }
            }
        }
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
