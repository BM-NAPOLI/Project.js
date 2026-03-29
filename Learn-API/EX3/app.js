//!




let myRequast = new XMLHttpRequest();
myRequast.open("GET", 'https://api.github.com/users/BM-NAPOLI');
myRequast.send()
console.log(myRequast);

myRequast.onreadystatechange = function() {
    // console.log(myRequast.readyState);
    // console.log(myRequast.status);
    if(this.readyState === 4 && this.status === 200){
        // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
        for(let i = 0; i < jsData.length; i++){
            let div = document.createElement("div");
            let repoName = document.createTextNode(jsData[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
};
