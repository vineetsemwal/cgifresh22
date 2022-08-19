/*
object destructuring
*/
const emp={
    id: 2, name: "melvin", age:21
    
}

const id1=emp.id;
const name1=emp.name;
const age1=emp.age;

console.log("id1="+id1,+"name1="+name1+"age="+age1);

const {id,name,age}=emp;

console.log("from destructuring id="+id +"name="+name+"age="+age);

