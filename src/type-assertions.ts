export {};

let name: any = 'Ham';

// NOTE asを利用する書き方が推奨されている。
// 山かっこ<>を使う方法はjsx（reactで利用される記法）と似ているから

// let length: number = name.length;
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;

// length = 'foo';
// console.log(length);