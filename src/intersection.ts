export {};

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};


const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    // throwingSpeed: 154,
    battingAverage: 0.367
}

// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// }

// intersection型：複数の型を&で連結して合成
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
}
