name1 = "Rifa3i";
name2 = "Doso9i";


let user = {
    name : name1,
    age : 30,
    city : "7alab",
    email : "szhdhi@gamil.com",
    skils : ["html", "css", "js"],
    isOnline : true,
    JINSIYA : {
        First : "morocan",
        Second : "Spanish"
    },
    online : function() {
        if(user.isOnline === true || user.age > 18 || user.JINSIYA.First === "morocan" ) {
            return `Hello ${user.name}`;
        }
        else {
            return `Sorry ${user.name}`;
        }
    }
    
};

console.log(user);
console.log(user.name);
console.log(user.JINSIYA.Second);
console.log(user.online());