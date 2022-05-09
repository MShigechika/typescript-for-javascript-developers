export {};

class Person {
  // public name: string;
  // protected age: number;

  // constructor(name: string, age: number) {
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('はむさん', 43);
console.log(me)
