let btn = document.getElementById('btn');

// btn.onclick = function () {
//     console.log("Button Clicked");
//     this.style.backgroundColor = "red";
// }

btn.onclick = function () {
    this.style.color = "white";
}


btn.onmouseout = function () {
    this.style.fontSize = "20px";
}

// btn.addEventListener('click', function () {
//     console.log("Button Clicked");
//     this.style.backgroundColor = "red";
// });

// btn.addEventListener('click', function () {
//     this.style.color = "white";
//     this.style.fontSize = "20px";
// });

btn.onmouseover = function (){
    this.style.backgroundColor = "blue";
}
