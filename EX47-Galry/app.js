let names = ["RAYAN","FARAZDA9","OSSAMA","L7ALAJ","JARIR","AHMED","LJAYLANI","RIFA3I","TAYMIYA","INB7AJAR","ABANOWASS","SALAFI","5ABIB","TORKMANISTAN","ZARADFISHTRA","SURHOME"];

let ages = ['12 yers old','77 yers old','23 yers old','67 yers old','47 yers old','33 yers old','10 yers old'];

let imgs = ['./img1.png','./img2.png','./img3.png','./img4.png','./img5.png','./img6.png','./img7.png','./img8.png','./img9.png','./img10.png','./img11.png','./img12.png'];

let continer = document.createElement('div');

document.body.appendChild(continer);
continer.style.textAlign = 'center';

function element(name,age,img){

    // Create Card
    let card = document.createElement('div');
    let title= document.createElement('h2');
    let agee = document.createElement('p');
    let image = document.createElement('img');

    // Content
    let head = document.createTextNode(name);
    let ageText = document.createTextNode(age);

    title.appendChild(head);
    agee.appendChild(ageText);
    image.src = img;

    // Style
    card.style.width = '200px';
    card.style.height = '300px';
    card.style.backgroundColor = '#eee';
    card.style.display = 'inline-block';
    card.style.margin = '10px';
    card.style.padding = '10px';
    card.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

    image.style.width = '100%';
    image.style.height = '70%';

    title.style.fontSize = '20px';
    agee.style.fontSize = '16px';

    // Append
    card.appendChild(title);
    card.appendChild(agee);
    card.appendChild(image);

    continer.appendChild(card);
}

for(let i = 0; i < names.length; i++){
    element(
        names[i],
        ages[Math.floor(Math.random() * ages.length)],
        imgs[Math.floor(Math.random() * imgs.length)]
    );
}