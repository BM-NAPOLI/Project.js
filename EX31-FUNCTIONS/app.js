//!
//* FUNCTONS *// 
//! 


function pro(price, tax, ads){
    let price = Number(document.getElementById("Price").value);
    let tax = Number(document.getElementById("tax").value);
    let ads = Number(document.getElementById("ads").value);
    let prodact = price * tax; 
    let result = prodact + ads;
    // document.write(result);
}
console.log(result)