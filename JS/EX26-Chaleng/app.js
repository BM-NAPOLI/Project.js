let continer = document.querySelector(".continer");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let add = document.querySelector(".add");

// ================= TITLE =================

let title = document.createElement("h1");

title.textContent = "Tasks 🍓";

title.style.cssText = `
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
    margin-bottom: 25px;
    letter-spacing: 1px;
`;

continer.prepend(title);


// ================= BODY STYLE =================

document.body.style.cssText = `
    margin: 0;
    min-height: 100vh;
    background-color: #121212;
    font-family: Arial, sans-serif;
`;


// ================= CONTINER STYLE =================

continer.style.cssText = `
    width: 600px;
    max-width: 90%;
    margin: 50px auto;
    padding: 25px;
    background-color: #1e1e1e;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
`;


// ================= FORM STYLE =================

form.style.cssText = `
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;


// ================= INPUT STYLE =================


input.style.cssText = `
    flex: 1;
    min-width: 150px;
    padding: 12px;
    border: 1px solid #333;
    outline: none;
    border-radius: 7px;
    background-color: #2a2a2a;
    color: white;
    font-size: 15px;
    box-sizing: border-box;
`;


// ================= ADD BUTTON STYLE =================

add.style.cssText = `
    padding: 12px 20px;
    border: none;
    background-color: #e63946;
    color: white;
    font-weight: bold;
    border-radius: 7px;
    cursor: pointer;
`;


// ================= LOCAL STORAGE =================

let tasks = JSON.parse(localStorage.getItem("task")) || [];


// ================= CREATE TASK FUNCTION =================

function createTask(task, index) {

    let continerAdd = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");

    p.textContent = task;

    btn.textContent = "Delete";


    // ===== TASK STYLE =====

    continerAdd.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        background-color: #2a2a2a;
        padding: 12px;
        margin-top: 12px;
        border-radius: 8px;
        box-sizing: border-box;
        word-break: break-word;
    `;


    // ===== TEXT STYLE =====

    p.style.cssText = `
        margin: 0;
        font-size: 17px;
        color: white;
        word-break: break-word;
    `;


    // ===== DELETE BUTTON STYLE =====

    btn.style.cssText = `
        background-color: #e63946;
        color: white;
        border: none;
        padding: 7px 12px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 15px;
    `;


    // ===== DELETE =====
    btn.onclick = function () {

        if (p.textContent === "Silya" ||p.textContent === "IMAN" ||
            p.textContent === "Iman" ||p.textContent === "NAIMA" ||
            p.textContent === "Naima"|| p.textContent === "Baby" ||
            p.textContent === "BABY"||p.textContent === "Benti"||
            p.textContent === "9lbi" ||p.textContent === "Zin Dyali") {
            document.body.style.backgroundColor = "red";
                    let error = document.createElement("p");

        error.textContent = "⚠ You can't delete My heart❤️!";

        error.style.cssText = `
            background-color: #3a1f1f;
            color: #ff6b6b;
            border: 1px solid red;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
            font-weight: bold;
            margin-top: 10px;
        `;

        continer.appendChild(error);

        setTimeout(function () {
            error.remove();
        }, 3000);

        } else {
            continerAdd.remove();
            tasks.splice(index, 1);
            localStorage.setItem("task", JSON.stringify(tasks));
            location.reload();
    }

};


    continerAdd.appendChild(p);
    continerAdd.appendChild(btn);

    continer.appendChild(continerAdd);
}


// ================= SHOW OLD TASKS =================

tasks.forEach(function (task, index) {

    createTask(task, index);

});


// ================= ADD TASK =================

add.onclick = function () {

    if (input.value.trim().length === 0) {

        let error = document.createElement("p");

        error.textContent = "⚠ Please enter a task";

        error.style.cssText = `
            background-color: #3a1f1f;
            color: #ff6b6b;
            border: 1px solid #e63946;
            padding: 10px;
            margin: 10px 0 0;
            border-radius: 6px;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.4s ease;
        `;

        form.appendChild(error);

        setTimeout(function () {

            error.style.opacity = "1";
            error.style.transform = "translateY(0)";

        }, 10);

        setTimeout(function () {

            error.style.opacity = "0";
            error.style.transform = "translateY(-10px)";

        }, 2500);

        setTimeout(function () {

            error.remove();

        }, 3000);

        return;
    }


    // Save task text
    let taskValue = input.value.trim();


    // Add to Array

    tasks.push(taskValue);


    // Save to LocalStorage

    localStorage.setItem(
        "task",
        JSON.stringify(tasks)
    );


    // Create Task

    createTask(
        taskValue,
        tasks.length - 1
    );


    // Clear Input

    input.value = "";
};


// ================= ENTER =================

input.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        add.click();

    }

});