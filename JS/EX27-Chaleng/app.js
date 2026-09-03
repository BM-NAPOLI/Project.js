// Destructuring Chalenge


let chosen = 1

;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] }
]

let friend = myFriends[chosen - 1];

// console.log(friend_1);

if (chosen === 1) {
    let { title: t, age: a, available: av, skills: [, C] } = friend;

    console.log(`His name is ${t}`)
    console.log(`His age is ${a}`)

    if (av === true) {
        console.log(`His availablty is available`)
    } else {
        console.log(`His availablty is not available`)
    }

    console.log(`His skille ${C}`)
} else if (chosen === 2) {
    let { title: t, age: a, available: av, skills: [, D] } = friend;

    console.log(`His name is ${t}`)
    console.log(`His age is ${a}`)

    if (av === true) {
        console.log(`His availablty is available`)
    } else {
        console.log(`His availablty is not available`)
    }

    console.log(`His skille ${D}`)
} else if (chosen === 3) {
    let { title: t, age: a, available: av, skills: [, L] } = friend;

    console.log(`His name is ${t}`)
    console.log(`His age is ${a}`)

    if (av === true) {
        console.log(`His availablty is available`)
    } else {
        console.log(`His availablty is not available`)
    }

    console.log(`His skille ${L}`)
} else {
    console.log("You have juste 3 friends");
}  