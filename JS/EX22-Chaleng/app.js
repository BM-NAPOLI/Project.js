// Chaleng


let mytring = "1,2,3,EE,l,z,e,r,_,W,e,b,S,c,ho,o,l,2,0,Z";

let solution = mytring.split(",").filter(el => isNaN(el) && el !== "Z").map((el, i) =>
    el === "_" ? "o "
        : i === 0 ? "E"
            : el === "S" ? " S"
                : el).join('')

// result = solution.slice(0, 6) + " " +  solution.slice(6, 9) + " " + solution.slice(9);

console.log(solution); // Elzero Web School