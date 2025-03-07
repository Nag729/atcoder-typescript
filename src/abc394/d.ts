export const Main = (inputList: string[]) => {
    const S = inputList[0];

    const stack: string[] = [];
    const OPEN_BRACKETS = new Set(["(", "[", "<"]);
    const BRACKET_PAIRS = {
        ")": "(",
        "]": "[",
        ">": "<",
    } as const;

    for (const char of S) {
        if (OPEN_BRACKETS.has(char)) {
            stack.push(char);
        } else if (char in BRACKET_PAIRS) {
            if (stack.pop() !== BRACKET_PAIRS[char]) {
                console.log("No");
                return;
            }
        }
    }

    console.log(stack.length === 0 ? "Yes" : "No");
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
