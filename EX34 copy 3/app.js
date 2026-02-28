let user1 = {
    name : "Ahmed",
    GetName : function () {
        return `Heloo ${this.name}`;
    },
};

let user2 = Object.create(user1);


console.log(user2.GetName());