let btn = document.querySelector("button");
let body = document.body;

body.style.cssText = `
    width: 5000px;
    height: 5000px;
`;
btn.style.cssText = `
    background-color: red;
    border: none;
    color: white;
    font-weight: bold;
    padding: 6px;
    border-radius: 4px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    cursor: pointer;
`;


window.onscroll = function () {
    if(scrollY >= 500 || scrollX >= 500) {
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};