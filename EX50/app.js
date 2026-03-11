let dolar = document.getElementById("DOLAR");
let diram = document.getElementById("DIRAM");

dolar.onkeyup = function  () {
    diram.value = dolar.value * 9.13; 
}
diram.onkeyup = function  () {
    dolar.value = diram.value / 9.13; 
}