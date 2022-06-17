export const Main = (input) => {
    const inputList = input.split("\n").filter((x) => x !== "");
    const hasDuplicate = inputList.length !== new Set(inputList).size;
    console.log(hasDuplicate ? "No" : "Yes");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
