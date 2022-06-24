export const Main = (input) => {
    const inputList = input.split("\n").filter((x) => x !== "");
    const S = inputList[1];

    const firstBadIndex = S.indexOf("1");
    const loser = firstBadIndex % 2 === 0 ? "Takahashi" : "Aoki";
    console.log(loser);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
