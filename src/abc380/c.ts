type Block = { value: 0 | 1; length: number };

export const Main = (inputList: string[]) => {
    const [_N, K] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const S = inputList[1].split("").map((v) => parseInt(v, 10)) as (0 | 1)[];

    const blocks: Block[] = S.reduce((acc: Block[], value) => {
        if (acc.length === 0 || acc[acc.length - 1].value !== value) {
            acc.push({ value, length: 1 });
        } else {
            acc[acc.length - 1].length++;
        }
        return acc;
    }, []);

    let k = K;
    const replaceIndex = blocks.findIndex((block) => {
        if (block.value === 1) {
            k--;
        }
        return k === 0;
    });

    const replaceBlock = { ...blocks[replaceIndex] };
    blocks[replaceIndex] = { ...blocks[replaceIndex - 1] };
    blocks[replaceIndex - 1] = replaceBlock;

    const answer = blocks.flatMap((block) => Array(block.length).fill(block.value)).join("");
    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
