export const Main = (input) => {
    const inputList = input.split(" ");
    const A = parseInt(inputList[0], 10);
    const B = parseInt(inputList[1], 10);

    [...Array(256).keys()].map((_, i) => {
        if ((A ^ i) === B) {
            console.log(i);
            process.exit();
        }
    });
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
