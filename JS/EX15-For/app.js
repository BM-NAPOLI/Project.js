// for

items = ["Keyborde", "Mouse", "Volly-Ball", "Tishort", "Glasers"];
colors = ["Black", "Red", "Bleu"];
Modules = ["2022", "2025"];

for (let i = 0; i < items.length; i++) {
    console.log("_".repeat(16));
    console.log(`# ${items[i]} :`);

    console.log("Colors :");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }

    console.log("Modules :");
    for (let k = 0; k < Modules.length; k++) {
        console.log(`- ${Modules[k]}`);
    }
}
