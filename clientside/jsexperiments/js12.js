/**
 * for each array -- of vs in
 */

const array1=["one", "two", "three"];

array1.push("four");

console.log("for each with of");

for(let element of array1){
 console.log("element="+element);

}

console.log("for each with in");
for(let index in array1){
  let element=array1[index];
  console.log("index="+index +"element="+element) ;
} 