import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Developer } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'dev-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent {

  dev: Developer | undefined;
  employeeService: EmployeeService = new EmployeeService();
  usernameCtrl: FormControl;
  myform: FormGroup;
  submitted:boolean=false;

  constructor(builder: FormBuilder) {
    this.usernameCtrl = builder.control('');
    this.myform = builder.group({
      username: this.usernameCtrl
    });
  }

  findDevByUsername(): void {
    this.submitted=true;
    this.dev=undefined;
    const username = this.usernameCtrl.value;

    const result: Developer | null = this.employeeService.findDeveloperByUsername(username);
    if (result != null) {
      this.dev = result
    }
  }

}
