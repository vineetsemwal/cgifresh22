/*
const is block scoped like let, once value is assigned , new value can't be assigned again
*/

const value=10;


const emp={
    id: 2, name: "melvin"
    
}
emp.name="sagar";

console.log("id="+emp.id+" name="+emp.name);