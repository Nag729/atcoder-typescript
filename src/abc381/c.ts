export const Main = (inputList: string[]) => {
    const S: string[] = inputList[1].split("");

    let ans = 0;
    let currentMode: "up" | "down" = "up";
    let upCount = 0;
    let downCount = 0;

    const resetState = () => {
        currentMode = "up";
        upCount = 0;
        downCount = 0;
    };

    for (const char of S) {
        if (char === "1") {
            if (currentMode === "up") {
                upCount++;
            } else {
                resetState();
                upCount = 1;
            }
        }
        if (char === "/") {
            ans = Math.max(ans, 1);

            if (currentMode === "up") {
                currentMode = "down";
            } else {
                resetState();
            }
        }
        if (char === "2") {
            if (currentMode === "up") {
                resetState();
            } else {
                downCount++;
                ans = Math.max(ans, Math.min(upCount, downCount) * 2 + 1);
            }
        }
    }

    console.log(ans);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
