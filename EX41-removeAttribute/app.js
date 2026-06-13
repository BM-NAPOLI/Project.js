let img = document.getElementById("di");

img.src = "./image.png";
img.alt = "uuu";
img.className = "img";
img.removeAttribute("alt");
console.log(img.getAttribute("alt"));