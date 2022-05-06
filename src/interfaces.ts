export {};

type ObjectType = { 
    name: string;
    age: number;
};

interface ObjectInterface {
    name: string;
    age: number;
}

// let object: ObjectType = {
let object: ObjectInterface = {
    name: 'Ham-san',
    // name: true,
    age: 43
}

console.log(object)