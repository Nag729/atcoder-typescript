export const Main = (inputList: string[]) => {
    const sList: number[] = inputList[0].split("").map((s) => Number(s));

    const buttonA = sList.length;
    const buttonB = sList.reverse().reduce((sum, current, i, arr) => {
        const prev = arr[i - 1];
        const count = !prev ? current : current >= prev ? current - prev : current + (10 - prev);
        return sum + count;
    }, 0);

    console.log(buttonA + buttonB);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
