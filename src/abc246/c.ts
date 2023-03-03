type CouponAvailability = {
    quotient: number;
    remainder: number;
};

export const Main = (inputList: string[]) => {
    const [_N, K, X] = inputList[0].split(" ").map((v) => parseInt(v, 10));
    const priceList = inputList[1].split(" ").map((v) => parseInt(v, 10));

    const sumPrice: number = priceList.reduce((sum, price) => sum + price, 0);
    const couponAvailabilityList: CouponAvailability[] = priceList.map((price) => ({
        quotient: Math.floor(price / X),
        remainder: price % X,
    }));

    const fullCouponCount: number = couponAvailabilityList.reduce((sum, ca) => sum + ca.quotient, 0);
    if (K <= fullCouponCount) {
        console.log(sumPrice - K * X);
        return;
    }

    let restPrice: number = sumPrice - fullCouponCount * X;
    const restCouponCount: number = K - fullCouponCount;

    couponAvailabilityList.sort((a, b) => b.remainder - a.remainder); // desc

    for (let i = 0; i < restCouponCount; i++) {
        restPrice -= couponAvailabilityList[i].remainder;
        if (restPrice <= 0) {
            console.log(0);
            return;
        }
    }
    console.log(restPrice);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
