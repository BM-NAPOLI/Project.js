let oppen = document.getElementById("oppen");   
let close = document.getElementById("close");
let continer = document.querySelector(".continer");

oppen.onclick = function () {
    oppen.classList.add("BBT");
    continer.classList.remove("BBT");
    close.classList.remove("BBT");
}
close.onclick = function () {
    oppen.classList.remove("BBT");
    continer.classList.add("BBT");
    close.classList.add("BBT");
}