/*
objects and methods
*/

var emp1 = {
    id: 1,
    name: "melvin",
    age: 21,

    display: function() {
        console.log("name=" + this.name + " age=" + this.age + " id=" + this.id);
    }
};

var emp2 = {
    id: 2,
    name: "imran",
    age: 22,

    display: function() {
        console.log("name=" + this.name + " age=" + this.age + " id=" + this.id);
    }
};

emp1.display();
emp2.display();













