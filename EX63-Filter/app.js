let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector(".reset");
let imgBox = document.querySelector(".img-box");

window.onload = function(){
    download.style.display = 'none';
    imgBox.style.display = 'none';
    reset.style.display = 'none';
}

resetValue = function(){
    img.style.filter = 'none';
    saturate.value = 100;
    contrast.value = 100;
    brightness.value = 100;
    sepia.value = 0;
    grayscale.value = 0;
    blur.value = 0;
    hueRotate.value = 0;
}

download.onclick = function(){
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    // نفس الفيلتر لي عندك
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
    `;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // تحويل الصورة
    let link = document.createElement("a");
    link.download = "filtered-image.png";
    link.href = canvas.toDataURL();
    link.click();
}

upload.onchange = function(){
    resetValue()
    download.style.display = 'block';
    imgBox.style.display = 'block';
    reset.style.display = 'block';

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]); // ✔️ تصحيح هنا

    file.onload = function(){
        img.src = file.result;
    }
}

let filters  = document.querySelectorAll("ul li input");
filters.forEach(  filter => {
    filter.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
    })
})