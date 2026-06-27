//* Chaleng Loop




let myAdmins = ["Ahmed", "Ossama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amged", "Sameh", "Ammer", "Omar", "Othman", "Amany", "Samia", 'Anwar'];

for (let i = 0; i < myAdmins.length; i++) {

    if (myAdmins[i] === "Stop") {
        document.write(`<div>We have ${i} Admins :</div>`);
        document.write(`<hr>`);
        break;
    }
}
for (let j = 0; j < myAdmins.length; j++) {
    if (myAdmins[j] === "Stop") {
        break;
    }
    document.write(`<div><H4>The Admin For Team ${j + 1} Is ${myAdmins[j]} :</H4></div>`);
    document.write(`<div><H2>Teams Memberes :</H2></div>`);
    let conter = 1;
    for (let k = 0; k < myEmployees.length; k++) {
        if (myAdmins[j][0] === myEmployees[k][0]) {
            document.write(`<div>- ${conter} ${myEmployees[k]}</div>`);
            conter++;
        }
    }
    document.write(`<hr>`);
}   