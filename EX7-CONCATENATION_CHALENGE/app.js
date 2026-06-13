//!
//* VARIABLE AND CONCATENATION CHALENGE *//
//!

let Ftitle = "Meryam";
let Stitle = "Lila";
let Ttitle = "Samia";
let FOtitle = "Fati Rose";
let fp = "First Hoyame";
let sp = "Lila is Laila Rose";
let tp = "Voly ball player";
let fop = "My maried life";
let age1 = 16;
let age2 = 17;
let age3 = 17;
let age4 = 16;
let time = "2 years ago";

let card1 = `<div class="card1">
        <h1> My name is ${Ftitle} </h1>
        <p> I am ${age1} years old</p>
        <p> ${fp} </p>
        <span>${time}</span>
    </div>`;

let card2 = `<div class="card2">
        <h1>My name is ${Stitle} </h1>
        <p>I am ${age2} years old</p>
        <p>${sp} </p>
        <span>${time}</span>
    </div>`;

let card3 = `<div class="card3">
        <h1> My name is ${Ttitle} </h1>
        <p> I am ${age3} years old</p>
        <p> ${tp} </p>
        <span>${time}</span>
    </div>`;
let card4 = `<div class="card4">
        <h1> My name is ${FOtitle} </h1>
        <p> I am ${age4} years old</p>
        <p> ${fop} </p>
        <span>${time}</span>
    </div>`;

document.write(card1);
document.write(card2);
document.write(card3);
document.write(card4);
