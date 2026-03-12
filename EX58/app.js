

if(localStorage.length > 0){
    document.body.style.backgroundColor = localStorage.color;
}


function chengBkCol(color) {
    localStorage.color = color;
    document.body.style.backgroundColor = color;
}