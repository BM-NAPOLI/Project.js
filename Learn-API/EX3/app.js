let myRequast = new XMLHttpRequest();
myRequast.open("GET", 'https://api.github.com/users/BM-NAPOLI/repos');
myRequast.send();

myRequast.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        
        let jsData = JSON.parse(this.responseText);

        for(let i = 0; i < jsData.length; i++){
            let div = document.createElement("div");

            let repoName = document.createTextNode(jsData[i].full_name);
            let stars = document.createTextNode("Stars: " + " ⭐ " + jsData[i].stargazers_count);

            div.appendChild(repoName);
            div.appendChild(stars);
            document.body.appendChild(div);
        }
    }
};