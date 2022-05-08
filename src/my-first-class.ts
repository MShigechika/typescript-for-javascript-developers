export {};

// クラスの}の後は;を書かない
// class Person {}
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
  // コンストラクタに戻り値の型はいらない（誤り）
  // constructor(name: string, age: number): void {
    this.name = name;
    this.age = age;
  }

  // インスタンスメソッド
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
    // シングルクォートは誤り。バッククォートらしい
    // return 'name: ${this.name}, age: ${this.age}';
  }
}

// let taro = new Person();
// let hanako = new Person();
let taro = new Person('Taro', 30);

console.log(taro);
console.log(taro.profile());