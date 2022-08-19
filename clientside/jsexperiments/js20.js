class Employee{

    id;
    name;
    age;

     constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    display(){
       console.log("id="+this.id+"name="+this.name+"age="+this.age) 
    }

}

const emp=new Employee(1,"imran",21);

emp.display()