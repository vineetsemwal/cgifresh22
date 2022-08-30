import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Developer } from '../developer';
import { EmployeeService } from '../services/developer.service';

@Component({
  selector: 'dev-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent {

  dev: Developer | undefined;
  employeeService: EmployeeService ;
  usernameCtrl: FormControl;
  myform: FormGroup;
  submitted:boolean=false;

  constructor(builder: FormBuilder,service:EmployeeService) {
    this.employeeService=service;
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
