/*
var vs let
*/
function add(num1, num2) {
    result = num1 + num2;
    console.log("result=" + result);
    var result;
    return result;

}

function varTest() {
    if (true) {
        var i = 10;
    }
    console.log("var i is " + i);
}

function letTest() {
    let i=0;
    if (true) {
        i = 10;
    }
    console.log("let i is " + i);
}

let result1=add(1,2);
varTest();
letTest();
