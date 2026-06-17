//! Chaleng Strign


let a = "Elzero Web School";
// Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

console.log("\n====================\n");

// HHHHHHHH
console.log(a.charAt(13).toUpperCase().repeat(8));

console.log("\n====================\n");

// [Elzero]
console.log([a.slice(-a.length -1, a.length - 11)]);

console.log("\n====================\n");

// Elzero School
console.log(a.substring(a.length - 17, a.length - (9+2)) + a.substring(a.length -7));

console.log("\n====================\n");

// elZERO WEB SCHOOL
console.log(a.slice(0, 2).toLowerCase() + a.slice(2, a.length).toUpperCase());


console.log(a.length);