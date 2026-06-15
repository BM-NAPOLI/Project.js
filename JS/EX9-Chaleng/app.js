//todo Chaleng Number 


let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//* find Slalesr Number in all variables And Return  Integer 
console.log(Math.trunc(Math.min(a, b, c, d)));

//* Use Variable  a + c One Tire To Get  Nedeed Output 
console.log(a * c);  // 10_000


//* Get Integer "2" From Variable With 4 Methoods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(+d.toFixed(0));
console.log(parseInt(d));

//* 


console.log("=====================\n");
console.log(Math.trunc(b)/2 - Math.trunc(d)*16.5);  //  67    
console.log(Math.trunc(b)/2 - Math.trunc(d)*17 + (Math.trunc(b)/2 - Math.trunc(d)*16.5)/100);  //  66.67    