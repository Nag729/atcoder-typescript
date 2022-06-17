class UnionFind {
    private parents: number[];

    public constructor(n: number) {
        this.parents = new Array<number>(n);
        for (let i = 0; i < n; i++) this.parents[i] = -1;
    }

    public root(a: number): number {
        if (this.parents[a] < 0) {
            return a;
        }
        return (this.parents[a] = this.root(this.parents[a]));
    }

    public size(a: number): number {
        return -this.parents[this.root(a)];
    }

    public connect(a: number, b: number): boolean {
        let ra = this.root(a);
        let rb = this.root(b);
        if (ra === rb) {
            return false;
        }

        if (this.size(ra) < this.size(rb)) {
            const tmp = ra;
            ra = rb;
            rb = tmp;
        }
        this.parents[ra] += this.parents[rb];
        this.parents[rb] = ra;
        return true;
    }

    public isUnion(a: number, b: number): boolean {
        const ra = this.root(a);
        const rb = this.root(b);
        return ra === rb;
    }
}

type Edge = {
    from: number;
    to: number;
};

// FIXME: Maximum call stack size exceeded 出てる
export const Main = (input) => {
    const inputList = input.split("\n").filter((x) => x !== "");
    const firstLine = inputList[0].split(" ");
    const N = parseInt(firstLine[0], 10);
    const M = parseInt(firstLine[1], 10);

    const edgeList: Edge[] = [];
    for (let i = 1; i <= M; i++) {
        const edgeLine = inputList[i].split(" ");
        const from = parseInt(edgeLine[0], 10);
        const to = parseInt(edgeLine[1], 10);
        edgeList.push({ from, to });
    }

    const uf = new UnionFind(N);
    let ans = 0;

    for (const edge of edgeList) {
        const from = edge.from;
        const to = edge.to;

        if (uf.isUnion(from, to)) {
            continue;
        }

        ans += 1;
        uf.connect(from, to);
    }

    console.log(ans);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
