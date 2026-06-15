//!  Chaleng 

let title = "Elzezo",
    Description = "Elzero Web School",
    date = "25/10";

let Chaleng = (`
    <div class="cards">
        <div class="content">
            <H3>Hello ${title}</H3>
            <p>${Description}</p>
            <span>${date}</span>
        </div>
    </div>
    `);    

document.write(Chaleng.repeat(4));