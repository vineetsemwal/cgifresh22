import { Component } from '@angular/core';
import { Developer, Tester } from './employee';

@Component(

  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }

)

export class AppComponent {
 developers:Developer[]=[
 new Developer("moksha",21,"dev","java"),
 new Developer("peddireddy",22,"dev","java") 
 ] 

 tester:Tester=new Tester("pankaj",21,"tester","selenium");
 
 constructor() {
   console.log("************inside constructor AppComponent");
  }

  findDeveloperNameStartingFrom(text:string):string{
  for(const dev of this.developers){
   const flag:boolean= dev.username.startsWith(text); 
    if(flag){
      return dev.username;
     }
  }
   return "not found";

}
}