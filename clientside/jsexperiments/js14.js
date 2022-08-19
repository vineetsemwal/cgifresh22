/*
array of objects
*/

const emp1 = {
    id: 1, name: "brishti",
    display: function () {
        console.log("name=" + this.name +  " id=" + this.id);
    }
};
const emp2 = {
    id: 2, name: "melvin",
    display: function () {
        console.log("name=" + this.name +  " id=" + this.id);
    }
};
const emp3 = {
    id: 3, name: "ragul", display: function () {
        console.log("name=" + this.name +  " id=" + this.id);
    }
};

const employees = [emp1, emp2, emp3];

for (const emp of employees){
    emp.display();
}

