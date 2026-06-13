let mybtn = document.getElementById("btn");


window.onscroll = function () {
    if (window.scrollY >= 400) {
        mybtn.style.display = "block";
    } else {
        mybtn.style.display = "none";
    }
}


mybtn.onclick = function () {
    window.scroll({
        left:0,
        top:0,
        behavior: "smooth"
    })
}