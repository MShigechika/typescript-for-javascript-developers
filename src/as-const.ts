export {};

let name = 'Atsushi';

name = 'Ham';

console.log(name);

// 実質的には定数。"Ham"の再代入はできる
let nickname = 'Ham' as const;

// nickname = 'Hamutaro';
nickname = 'Ham';

// 定数の場合には再代入はできない
const foo = 'bazz'
// foo = 'bazz'

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// as constをつけない場合、オブジェクトの再代入はできる
// as constをつけるとreadonlyになるので再代入はできない
// profile.name = 'Ham';
// profile.height = 180;


