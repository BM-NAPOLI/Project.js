let input = document.getElementById("input");
let submit = document.getElementById("submit"); 


window.onload = function () {
    input.focus();
    submit.click();
    input.placeholder="اكتب شيئا..."
}

submit.onclick = function () {
    this.style.backgroundColor = "red";
    this.style.borderRadius = "10px";
}