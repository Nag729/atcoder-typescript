const correctStart = ({ t, l }: { t: number; l: number }): number => {
    return [3, 4].includes(t) ? l + 0.1 : l;
};
const correctEnd = ({ t, r }: { t: number; r: number }): number => {
    return [2, 4].includes(t) ? r - 0.1 : r;
};

export const Main = (input) => {
    const inputList = input.split("\n");
    const N = Number(inputList[0]);

    const sectionList: {
        start: number;
        end: number;
    }[] = [...Array(N)].map((_, i) => {
        const input = inputList[i + 1];
        const [t, l, r] = input.split(" ").map(Number);
        return {
            start: correctStart({ t, l }),
            end: correctEnd({ t, r }),
        };
    });

    sectionList.sort((a, b) => a.start - b.start);
    let count = 0;
    for (let i = 0; i < sectionList.length - 1; i++) {
        for (let j = i + 1; j < sectionList.length; j++) {
            if (sectionList[i].end >= sectionList[j].start) {
                count++;
            }
        }
    }
    console.log(count);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
