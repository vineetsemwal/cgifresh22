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
  
 developer1=new Developer("taran",21, "dev", "java");
 tester1=new Tester("moksha",21,"tester","selenium");
  constructor() {
   

  }


}
