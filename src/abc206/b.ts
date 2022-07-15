export const Main = (input) => {
    const inputList = input.split("\n");
    const N = parseInt(inputList[0], 10);

    let day = 1;
    let total = 0;
    while (true) {
        total += day;
        if (total >= N) {
            console.log(day);
            break;
        }
        day++;
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
