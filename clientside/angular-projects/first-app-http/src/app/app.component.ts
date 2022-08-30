import { Component } from '@angular/core';
import { Developer } from './developer';

@Component(

  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }

)

export class AppComponent {
 developers:Developer[]=[
 new Developer("moksha",21,"java"),
 new Developer("peddireddy",22,"java")
 ]



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
