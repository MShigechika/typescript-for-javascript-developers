export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];

let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenhairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

// 共用型,UnionTypes
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];