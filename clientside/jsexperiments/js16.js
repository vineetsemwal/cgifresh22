/*
rest/spread operator
*/

const emp1={
     name: "melvin", age:21, dept:"development"
    
}

const emp2={name:emp1.name, age:emp1.age, dept:emp1.dept};

const address={city:"hyderabad", country:"india"};

const emp3={...emp1 ,name:"imran", ...address ,  experience:2};

console.log("emp3",emp3 );
