let hero = document.createElement("section");
let header = document.createElement("header");
let nav = document.createElement("nav");
let title = document.createElement("a");
let list = ["Home", "About", "Serveces", "Projects"];
let ul = document.createElement("ul");

let continar_cards = document.createElement("section");
let cards = document.createElement("div");

let footer = document.createElement("footer");
let social = document.createElement("div");
let links = ["GitHub", "LinkedIn", "Instagram", "X"];
let p = document.createElement("p");

let socialLinks = [
    {
        name: "GitHub",
        link: "https://github.com/BM-NAPOLI"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rayan-minazzou-657822371"
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/bm__napoli/"
    },
    {
        name: "X",
        link: "https://x.com/minazzou48116"
    }
];

social.className = "social";
p.textContent = "© 2026 BM NAPOLI. All Rights Reserved.";

for (let i = 0; i < links.length; i++) {

    let a = document.createElement("a");

    a.textContent = socialLinks[i].name;
    a.href = socialLinks[i].link;
    a.target = "_blank";

    social.appendChild(a);

    //? styling

    a.style.cssText = `
        text-decoration: none;
        color: white;
        font-size: 18px;
        transition: 0.3s;
    `;

    a.addEventListener("mouseenter", () => {
        a.style.color = "#00bcd4";
    });

    a.addEventListener("mouseleave", () => {
        a.style.color = "white";
    });
}


for (let i = 0; i < 15; i++) {
    let card = document.createElement("div");
    let numbers = document.createElement("h2");
    numbers.textContent = i + 1;

    card.style.cssText = `
        width: 220px;
        height: 150px;
        background: rgba(40, 2, 255, 0.1);
        border-radius: 10px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;
    `;

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
    });

    numbers.style.cssText = `
        font-size: 3rem;
        font-weight: bold;
        color: #4f46e5;
        font-family: Arial, sans-serif;
        margin: 0;
        text-align: center;
        user-select: none;
    `;

    cards.appendChild(card);
    card.appendChild(numbers);
}

continar_cards.className = "sectiond_Cards";
cards.className = "cards";


title.textContent = "BM NAPOLI"

for (let i = 0; i < list.length; i++) {

    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = list[i];
    a.href = "#";

    li.appendChild(a);
    ul.appendChild(li);

    a.style.cssText = `
    text-decoration: none;
    color: white;
    font-size: 17px;
    transition: 0.3s;
`
    a.style.cssText = `
    text-decoration: none;
    color: white;
    font-size: 17px;
    transition: 0.3s;
`

    a.addEventListener("mouseenter", () => {
        a.style.color = "#00bcd4";
    });

    a.addEventListener("mouseleave", () => {
        a.style.color = "white";
    });

}

header.className = "header";
nav.id = "navbar";
title.className = "logo";
ul.className = "nav-links";

//* Css Styling
header.style.backgroundColor = "#222";
nav.style.cssText = `
    width: 90%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
`

title.style.cssText = `
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
`

ul.style.cssText = `
    list-style: none;
    display: flex;
    gap: 25px;
`

cards.style.cssText = `
    width: 90%;
    max-width: 1200px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`

footer.style.cssText = `
    background: #222;
    color: white;
    text-align: center;
    padding: 25px;
`

social.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
`

p.style.cssText = `
    margin: 0;
    color: #bbb;
    font-size: 15px;
`;



nav.appendChild(title);
nav.appendChild(ul);
header.appendChild(nav)
hero.appendChild(header)
document.body.appendChild(hero);

continar_cards.appendChild(cards);
document.body.appendChild(continar_cards);

footer.appendChild(social)
footer.appendChild(p)
document.body.appendChild(footer);

