/*
rest/spread operator
*/


function add(...numbers) {
    let result = 0;
    for (const num of numbers) {
        result = result + num;
    }
    return result;
}

const result1=add(10, 20);
const result2=add(5, 2, 1);

console.log("result1="+result1);

console.log("result2="+result2);