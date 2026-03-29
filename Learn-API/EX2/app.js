//!   API   //
//?   EX2  //


setTimeout(()=> console.log('Silya'),4000)
function one(){
    console.log(1);
}
function two(){
    one()
    console.log(2);
}
function tree(){
    two()
    console.log(3);
}

tree()