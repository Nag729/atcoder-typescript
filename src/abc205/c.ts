export const Main = (input) => {
    const inputList = input.split("\n");
    const [A, B, C] = inputList[0].split(" ").map((v) => parseInt(v, 10));

    const cIsEven = C % 2 === 0;
    const fixedA = cIsEven ? Math.abs(A) : A;
    const fixedB = cIsEven ? Math.abs(B) : B;

    if (fixedA > fixedB) {
        console.log(`>`);
    } else if (fixedA < fixedB) {
        console.log(`<`);
    } else {
        console.log(`=`);
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
