import { Component } from '@angular/core';
import { Developer, Employee, Tester } from './employee';
import { EmployeeService } from './employee.service';

@Component(

  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }

)

export class AppComponent {
 service = new EmployeeService();
  foundDeveloper: Developer =new Developer("",-1,"","");
  foundTester: Tester =new Tester("",-1,"","");
  error: any | undefined;


  constructor() {
    try {
      this.service.addDeveloper("himanshu", 21, "java");
      this.service.addDeveloper("imran", 22, "javascript");
      this.service.addTester("moksha", 22, "selenium");
      this.service.addTester("aditi", 22, "selenium");

      this.foundDeveloper = this.service.findDeveloperByUsername("aaa");
      console.log("found developer", this.foundDeveloper)
      this.foundTester = this.service.findTesterByUsername("moksha");
      console.log("found tester", this.foundTester);
    } catch (error) {
      console.log("error details ", error);
      this.error = error;
    }

  }


}
