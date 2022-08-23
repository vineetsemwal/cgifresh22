
export  class Employee{
  username:string;
  age:number;
  type:string;
  constructor(username:string, age:number, type:string){
    this.username=username;
    this.age=age;
    this.type=type;
  }
}

export class Tester extends Employee{
  testingTool:string;
  constructor(username:string,age:number,type:string,tool:string){
    super(username,age,type);
    this.testingTool=tool;
  }
}

 export class Developer extends Employee{
   language:string;
 
   constructor(username:string,age:number,type:string, language:string){
    super(username,age, type);
    this.language=language;
   }


  }

  
