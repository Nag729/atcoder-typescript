export const Main = (input) => {
    const S = input.split("\n")[0];
    console.log(S);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
