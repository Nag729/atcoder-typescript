export const Main = (input) => {
    const inputList = input.split("\n");
    const sList: string[] = [...inputList[0]];

    const containNumberList: number[] = sList
        .map((v, index) => (v !== "o" ? undefined : index))
        .filter((v): v is number => v !== undefined);
    const unknownNumberList: number[] = sList
        .map((v, index) => (v !== "?" ? undefined : index))
        .filter((v): v is number => v !== undefined);

    if (containNumberList.length > 4) {
        console.log(0);
        return;
    }

    const possibleNumberList: number[] = [...containNumberList, ...unknownNumberList];

    let count: number = 0;
    for (const i of possibleNumberList) {
        for (const j of possibleNumberList) {
            for (const k of possibleNumberList) {
                for (const l of possibleNumberList) {
                    const pickedList: number[] = [i, j, k, l];
                    const isOk = containNumberList.every((v) => pickedList.includes(v));
                    if (isOk) count++;
                }
            }
        }
    }
    console.log(count);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
