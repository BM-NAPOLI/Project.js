// Skip /

// console.log("Hello world");
// console.log("Hello 'World'");
// console.log('Hello "World"');
// console.log('Hello \'World\'');
// console.log("Hello \"World\"");
// console.log("lorem2020\ndpsum2020do\nlor2020sit2020amet");
// console.log("really\
//     i\
//     love\
//     this\
//     person\
//     but\
//     i\
//     dont\
//     know\
//     why ?");

//? \n => saut de ligne (ligne jdida)
console.log("Salam\nLabas ?");

// -----------------------------

//! \t => tabulation
console.log("Nom:\tRachid");

//* -----------------------------

//todo \" => afficher double quote
console.log("Ana \"JavaScript Developer\"");

//* -----------------------------

//? \' => afficher simple quote
console.log('Ana \'Rachid\'');

//* -----------------------------

//! \\ => afficher backslash
console.log("C:\\Users\\Rachid");

//* -----------------------------

//? \r => retour au début de la ligne
console.log("Hello\rWorld");

//* -----------------------------

//! \ à la fin de la ligne => continuation de la string
console.log("really \
i \
love \
this \
person");

//* -----------------------------

//? Exemple regroupant plusieurs escape sequences
console.log(
    "Nom:\tRachid\n" +
    "Metier:\t\"Developer\"\n" +
    "Path:\tC:\\Users\\Rachid"
);