export const Main = (inputList: string[]) => {
    const [allShopCount, flavorCount]: number[] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const availableFlavorMap: boolean[][] = inputList
        .slice(1, allShopCount + 1)
        .map((s) => s.split("").map((v) => v === "o"));

    // bit全探索で全ての店の組み合わせを試して、全種類のポップコーンを食べられる最小の売り場数を求める
    let answer = Infinity;
    for (let bit = 0; bit < 1 << allShopCount; bit++) {
        // 店の組み合わせを列挙する
        const selectedShops: number[] = [];
        for (let i = 0; i < allShopCount; i++) {
            if (bit & (1 << i)) {
                selectedShops.push(i);
            }
        }

        // すべてのポップコーンを食べられるかどうかを判定する
        const isAllPopcornAvailable = [...Array(flavorCount).keys()].every((flavor) =>
            selectedShops.some((shop) => availableFlavorMap[shop][flavor]),
        );
        if (isAllPopcornAvailable) {
            answer = Math.min(answer, selectedShops.length);
        }
    }

    console.log(answer);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
