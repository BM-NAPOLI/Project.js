// Chaleng

//! div Prodact => h3 => p

for (let i = 1; i <= 100; i++) {
    let my_Prodact = document.createElement("div");
    let my_h1 = document.createElement("h1");
    let my_p = document.createElement("p");

    my_h1.textContent = `Silya${i}`;
    my_h1.id = "Silya";
    my_h1.className = `Class-Silya${i}`;

    my_p.textContent = "Lyoma Lhed 2026-07-05 Al hamdo lah 3ALA koli 7al, xet lbar7 wa7d l7aJa kent kansemiha denya hhh";
    my_p.id = "Paragraphe";

    my_Prodact.append(my_h1);
    my_Prodact.append(my_p);


    
    document.body.append(my_Prodact);
}




