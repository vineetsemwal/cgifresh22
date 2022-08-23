import { Developer, Employee, Tester } from "./employee";

export class EmployeeService{
store:Employee[]=[];

 addDeveloper(username:string,age:number,languge:string):void{
    const dev:Developer=new Developer(username,age,"Developer",languge);
    this.store.push(dev); 
}    

addTester(username:string,age:number,tool:string):void{
    const dev:Developer=new Developer(username,age,"Tester",tool);
    this.store.push(dev); 
}    


findDeveloperByUsername(username:string):Developer{

   for(const emp of this.store){
     if(emp.username===username && emp.type==="Developer"){
            const dev:Developer=emp as Developer;
            return dev;
     }

   }
   
   throw new Error("developer not found");


}



findTesterByUsername(username:string):Tester{

    for(const emp of this.store){
      if(emp.username===username && emp.type==="Tester"){
             const tester:Tester=emp as Tester;
             return tester;
      }
 
    }
    
    throw new Error("Tester not found");
 
 }


}