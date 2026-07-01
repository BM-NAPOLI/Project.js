// Chaleng

// let names = function (...names) {
//     return names.map(el => `[${el}]`).join(", ");
// }

// let names  = (...names) => names.map(el => `[${el}]`).join(", ");

// console.log(names("Ahmed", "Ayman", "sofyan", "Adam", "Zain"));


let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two +  nums.reduce((acc, cur) => acc + cur, 0);

console.log(calc(10, myNumbers[0], myNumbers[1]));