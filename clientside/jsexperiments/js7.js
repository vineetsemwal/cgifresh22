/*
double equal vs triple equal
double equal to only compare value
triple equal compare value + data type 
*/

var value1=10;

var value2="10";

var doubleIsEqual= value1==value2;

console.log("double equal="+doubleIsEqual);

var tripleIsEqual= value1===value2;
console.log("triple equal to="+tripleIsEqual);