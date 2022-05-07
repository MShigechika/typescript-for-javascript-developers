export {};

const kansu = (): number => 43;
// const kansu = (): any => 43;
console.log(kansu)
console.log(kansu())

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown)
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}

let sumUnknown2 = numberUnknown + 'xxx';

console.log(sumAny);
// console.log(sumUnknown);
console.log(sumUnknown2);

