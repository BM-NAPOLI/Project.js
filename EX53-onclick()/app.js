let FirstBtn = document.getElementById("fBT");
let SecondBtn = document.getElementById("SBT");
let InputBtn = document.getElementById("inp");

InputBtn.onclick = function () { 
    FirstBtn.classList.toggle("del");
    FirstBtn.classList.add("btn");
    SecondBtn.classList.toggle("del");
    SecondBtn.classList.add("btn");

}