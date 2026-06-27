/// Exercice 


let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ammer"];

let del = my.splice(((my[zero].length + my[zero].length) - (counter + counter)),
    (((my[zero].length + my[zero].length) - (counter + counter) - (counter + counter))
        + ((my[zero].length + my[zero].length) - (counter + counter))));
console.log(my)
// console.log(((my[zero].length + my[zero].length) - (counter + counter)))
// console.log((((my[zero].length + my[zero].length) - (counter + counter) - (counter + counter)) + ((my[zero].length + my[zero].length) - (counter + counter))))


console.log(my.slice((counter - (((my[zero].length + my[zero].length) - (counter + counter)
    - (counter + counter)) + ((my[zero].length + my[zero].length) - (counter + counter)))),
    counter).reverse())

// console.log(my.length - counter);

// let elzero = [(my.slice((my.length - counter), ((my.length - counter) + (my.length - counter))))];

// console.log(elzero.splice(0, 2, "EL"));

let elzero = ("EL" + my[1].slice(2));
console.log(elzero);

console.log(counter - ((my[zero].length + my[zero].length) - (counter + counter) - (counter + counter)) + ((my[zero].length + my[zero].length) - (counter + counter)))