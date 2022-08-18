/*
demo of hoding refrence of a function
*/
function add(num1, num2){
    var result=num1+num2;
    return result;
}

var sum=add;

var result=sum(2,3);

console.log("result is "+result)