//? ceate element
let continer = document.createElement("div");
let head = document.createElement("h1");
let img = document.createElement('img');
//? add content
let content = document.createTextNode('SAYID A7MED RIFA3I');
head.appendChild(content);
img.src = './img1.png';
img.style.width = '150px';
//? add element to body
continer.appendChild(head);
continer.appendChild(img);
document.body.appendChild(continer);
console.log(continer);