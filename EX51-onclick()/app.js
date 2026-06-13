let After = document.getElementById('After');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let continer = document.getElementById('continer');

continer.style.cssText = "height :50px; background-color: yellow;border-left: 10px solid ";
// continer.style.backgroundColor = "yellow";
// continer.style.height = "50px";

After.onclick = function () {
    continer.after(content);
}

before.onclick = function () {
    continer.before(content);
}

append.onclick = function () {
    continer.append(content);
}       
