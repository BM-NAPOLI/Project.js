// Function


function Name(Fname, Lname) {
    Hello = "Hello";
    function ConcatName() {
        return `${Fname} ${Lname}`;
    }
    function seyHello() {
        return `${Hello} ${ConcatName()}`;
    }
    console.log(seyHello());
    
}
Name("Rayan", "Minazzou")