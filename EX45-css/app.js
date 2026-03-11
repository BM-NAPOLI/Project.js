let continer = document.getElementById("continer");
            // ! First Method //
// continer.style.backgroundColor = "red";
// continer.style.color = "white";
// continer.style.fontSize = "50px";
// continer.style.textAlign = "center";
// continer.style.padding = "20px";
// continer.style.borderRadius = "10px";
// continer.style.cursor = "pointer";
            // ! Second Method //
// continer.setAttribute("style","background-color : black; color : white; border-radius : 10px;");     
            // ! Third Method //       
continer.style.cssText = "background-color : black; color : white; border-radius : 10px; font-size : 50px; text-align : center; padding : 20px; cursor : pointer;";