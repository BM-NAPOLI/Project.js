let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
    if (inp.value != "") {

        let p = document.createElement("p");
        p.className = "item";
        p.textContent = inp.value;
        p.setAttribute("draggable", "true");

    //! drag start
    p.addEventListener("dragstart", function () {
        drag = p;
        p.style.opacity = "0.5";
    });

    //? drag end
    p.addEventListener("dragend", function () {
        drag = null;
        p.style.opacity = "1";
    });

    boxs[0].appendChild(p);
    inp.value = "";
    }
};

//todo events ديال boxes غير مرة وحدة
boxs.forEach((box) => {
    box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "#090";
        this.style.color = "#fff";
    });

    box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
    });

    box.addEventListener("drop", function () {
        this.append(drag);
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
    });
});