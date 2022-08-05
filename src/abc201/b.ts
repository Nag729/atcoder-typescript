export const Main = (input) => {
    const inputList = input.split("\n");
    const N: number = parseInt(inputList[0], 10);
    const mountainList: { name: string; height: number }[] = [];
    for (let i = 1; i <= N; i++) {
        const [S, T] = inputList[i].split(" ");
        mountainList.push({ name: S, height: parseInt(T, 10) });
    }

    mountainList.sort((a, b) => b.height - a.height);
    console.log(mountainList[1].name);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
