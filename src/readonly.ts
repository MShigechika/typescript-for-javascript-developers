export {};

class VisaCard {
  // readonly owner: string;

  constructor(public readonly owner: string) {
  // publicは省略可能であるが、分かりにくいので省略しないほうが良い
  // constructor(readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
// console.log(myVisaCard.owner);

