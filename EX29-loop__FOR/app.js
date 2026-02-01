//!
//* Lopp *//
//!


// let MR = "Meryam";

// for (i = 0; i < girls.length; i++)
// {
//     console.log(girls[i]);
// }

// console.log("===============");
// console.log("===============");

// for (j = 0; j < MR.length; j++)
// {
//     console.log(MR[j]);
// }

// //! reverse Loop

// console.log("===============");
// console.log("===============");

// let rev = [];

// for (k = girls.length - 1; k >= 0; k--)
// {
//     rev.push(girls[k]);
// }
// console.log(rev);

let girls = [ "Salwa", "Kenza", "Wissale", "Meryam", 33, "Yassmin", "Laila","Hiba",];

for (i = 0; i < girls.length; i++)
    {
        if (girls[i] === "Yassmin")
            {
                continue;
            } 
        else if (typeof girls[i] === "number") 
            {
                continue;
            } 
        else if (girls[i] === "Meryam")
            {
                window.alert("b9 Meryam");
                continue;
            } 
        else if (girls[i] !== "Hiba")
            {
                document.write("<h1>My Wife</h1>");
                continue;
            }
        console.log(girls[i]);
    }
