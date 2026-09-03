
document.getElementById("form").onsubmit = function(){
    let phonNmber = document.getElementById("phone").value;
    let phoneRe =  /^(\+212\s?)?(6|7)\d{8}$/ ;
    let CheckNumber = phoneRe.test(phonNmber);
    
    if(CheckNumber === false){
        return false;
    }

    return true;


}