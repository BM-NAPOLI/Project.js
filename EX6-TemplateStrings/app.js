//!
//* Template Literals (Template Strings) *//
//!

// let a = "We Love";
// let b = "Lila Rose";
// let c = "and";
// let d = "Stok fishe";

// document.write(a + " " + b + "\n" + c + " " + d);
// console.log(a + " " + b + "\n" + c + " " + d);
// console.log(`${a} ${b}
// ${c} ${d}`);
let title = "Lila Rose";
let desc = "We Love Lila Rose";
let markUp = `
    <div classs ="card">
        <div class ="child">
            <h2>${title}</h2>
            <p>${desc} </p>
        </div>
    </div>    
`;

document.write(markUp);
