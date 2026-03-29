    //!
//?  AP1-EX1   //
    //!

const myJsonObjectFromusers = '{"Name" : "Silya", "Age" : 16}';
console.log(typeof myJsonObjectFromusers);
console.log(myJsonObjectFromusers);

const myJson = JSON.parse(myJsonObjectFromusers);
console.log(typeof myJson);
console.log(myJson);

myJson ["Name"] = undefined;
myJson ["Age"] = 0;

const myJonsonToServer = JSON.stringify(myJson);
console.log(typeof myJonsonToServer);
console.log(myJson);