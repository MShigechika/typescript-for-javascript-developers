export {}

// let bmi: (height: number, weight: number) => number = (
//   height: number,
//   weight: number
// ): number => {
//   return weight / (height * height)
// }
// arrow関数（ラムダ式）は1行の場合、returnを省略できる
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height)

console.log(bmi(1.57, 65))
