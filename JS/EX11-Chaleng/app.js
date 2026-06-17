//? If Chaleng

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
        ? console.log("10 To 40")
        : a > 40
            ? console.log("> 40")
            : console.log("Unknown");



// Write Wth Tenary if Syntax

let st = "Elzero Web School";

if ( typeof("????") === typeof("34")) {
    console.log("Good");
}

if ("????" === "w" || st.toLocaleLowerCase().includes('w')) {
    console.log("Good");
}

if ("????" !== "string") {
    console.log("Good");
}

if (typeof("????") === typeof("number")) {
    console.log("Good");
}

if (typeof("????")=== typeof("ElzeroElzero")) {
    console.log("Good");
}