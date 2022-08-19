class Employee{

    id:number;
    name:string;
    age:number;

     constructor(id:number,name:string,age:number){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    display() :void {
       console.log("id="+this.id+"name="+this.name+"age="+this.age) 
    }

}

const emp:Employee=new Employee(1,"imran",21);

emp.display();