export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  
  // constructor(public name: string, public speed: number) {
  //   super(name);
  // }
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    // const parentMessage = super.run();
    // console.log({parentMessage});
    return `${super.run()} ${this.speed}km/h.`;
  }
}


// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Michey').run());
console.log(new Lion('Simba', 80).run());