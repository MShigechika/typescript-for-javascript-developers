export {};

// シグネチャ：関数の実体の前に書く
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof (value) === 'number') {
    return value * 2;
  // } else if (typeof value === 'string') {
    } else {
    return value + value;
  // } else {
  //   throw 'numberでもstringでもないので、引数の型を確認してください。'
  }
}

// function double(value: string): string {
//   return  value + value;
// }

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));