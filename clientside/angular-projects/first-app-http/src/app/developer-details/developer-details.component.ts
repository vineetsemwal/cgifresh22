import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Developer } from '../developer';
import { EmployeeService } from '../services/developer.service';

@Component({
  selector: 'dev-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent {

  dev: Developer | undefined;
  employeeService: EmployeeService;
  idCtrl: FormControl;
  myform: FormGroup;
  submitted: boolean = false;
  errMsg: string | undefined;

  constructor(builder: FormBuilder, service: EmployeeService) {
    this.employeeService = service;
    this.idCtrl = builder.control('');
    this.myform = builder.group({
      id: this.idCtrl
    });
  }

  findDevById(): void {
    this.submitted = true;
    this.dev = undefined;
    this.errMsg=undefined;
    const id: number = this.idCtrl.value;

    const observer = {
      next: (result: Developer) => {
        this.dev = result;
        console.log("***result consumed");
      },

      error: (error: Error) => {
        this.errMsg = error.message;
        console.log("*** error consumed "+this.errMsg);
      }

    }

    const observable: Observable<Developer> = this.employeeService.findDeveloperById(id);
    observable.subscribe(observer);

  }

}
