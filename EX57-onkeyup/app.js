let text = document.getElementById("txt");
let text2 = document.getElementById("txt2");

if(localStorage.length >0){
    text.value = localStorage.name;
}


text.onkeyup = function() {
    localStorage.name = text.value;
}
//? 

if(sessionStorage.length >0){
    text2.value = sessionStorage.name;
}


text2.onkeyup = function() {
    sessionStorage.name = text2.value;
}
