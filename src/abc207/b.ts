export const Main = (input) => {
    const inputList = input.split("\n");
    const [A, B, C, D] = inputList[0].split(" ").map(Number);

    if (B >= C * D) {
        console.log(-1);
        return;
    }

    let blue_count = A;
    let red_count = 0;
    let answer = 0;

    while (true) {
        blue_count += B;
        red_count += C;
        answer++;

        if (blue_count <= red_count * D) {
            console.log(answer);
            return;
        }
    }
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
