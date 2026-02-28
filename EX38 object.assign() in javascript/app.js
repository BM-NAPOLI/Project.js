let a1 = {
    num1 : 1
}
let a2 = {
    num2 : 2
}
let a3 = {
    num3 : 3
}
let a4 = Object.assign(a1,a2,a3,{num4:4});
console.log(a4);
console.log(a4.num1 + a4.num2);