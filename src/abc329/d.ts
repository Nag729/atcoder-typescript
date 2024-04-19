export const Main = (inputList: string[]) => {
    const [N, _M] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const persons = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const scoreMap = new Map<number, number>(); // key: person, value: score
    for (let i = 0; i < N; i++) {
        scoreMap.set(i + 1, 0);
    }

    let ans = "";
    let maxScore = 0;
    let winner = N + 10; // 最初のループで必ず更新される

    for (const person of persons) {
        const nextScore = scoreMap.get(person)! + 1;
        scoreMap.set(person, nextScore);

        if (nextScore > maxScore) {
            maxScore = nextScore;
            winner = person;
        }
        if (nextScore === maxScore) {
            if (person < winner) {
                winner = person;
            }
        }

        ans += winner + "\n";
    }

    console.log(ans);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
