import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Developer } from '../developer';
import { EmployeeService } from '../services/developer.service';

@Component({
  selector: 'add-developer-codedriven',
  templateUrl: './add-developer-codedriven.component.html',
  styleUrls: ['./add-developer-codedriven.component.css']
})
export class AddDeveloperCodedrivenComponent {

  usernameCtrl: FormControl;
  ageCtrl: FormControl;
  languageCtrl: FormControl;
  myform: FormGroup;

  submitted: boolean = false;
  developer: Developer | undefined;
  employeeService: EmployeeService;
  errMsg: string | undefined;

  constructor(builder: FormBuilder, service: EmployeeService) {
    this.employeeService = service;
    this.usernameCtrl = builder.control('',
      [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
    this.ageCtrl = builder.control('',
      [Validators.required, Validators.min(18), Validators.max(60)]);
    this.languageCtrl = builder.control('', [Validators.required]);
    const mapObj = {
      username: this.usernameCtrl,
      age: this.ageCtrl,
      language: this.languageCtrl
    };
    this.myform = builder.group(mapObj);


  }

  isAgeRequiredNotValid(): boolean {
    const flag: boolean = this.isFieldRequiredNotValid(this.ageCtrl);
    return flag;
  }

  isUsernameRequiredNotValid(): boolean {
    const flag = this.isFieldRequiredNotValid(this.usernameCtrl);
    return flag;
  }

  isFieldRequiredNotValid(formCtrl: FormControl) {
    if (!formCtrl.touched && !formCtrl.dirty) {
      return false;
    }
    const flag = formCtrl.errors != null && formCtrl.errors['required'];
    return flag;

  }

  isUsernameLengthNotBetween() {
    const formCtrl = this.usernameCtrl;
    if (!formCtrl.touched && !formCtrl.dirty) {
      return false;
    }
    const flag = formCtrl.errors != null && (formCtrl.errors['minlength'] || formCtrl.errors['maxlength'])
    return flag;
  }

  isAgeNotBetween() {
    const formCtrl = this.ageCtrl;
    if (!formCtrl.touched && !formCtrl.dirty) {
      return false;
    }
    const flag = formCtrl.errors != null && (formCtrl.errors['min'] || formCtrl.errors['max']);
    return flag;

  }


  addDeveloper(): void {
    /*
      if(!this.myform.valid){
      return;
    }*/

    const username = this.usernameCtrl.value;
    const age = this.ageCtrl.value;
    const language = this.languageCtrl.value;
    const requestData = new Developer(username, age, language);
    const observer = {
      next: (result: Developer) => {
        this.developer = result;
        console.log("***inside add developer component,  result consumed",result);
      },
      error: (error: Error) => {
        console.log("***inside add developer component,  error consumed" + error.message);
        this.errMsg = error.message;
      }
    }
    const observable: Observable<Developer> = this.employeeService.addEmployee(requestData);
    observable.subscribe(observer);
    console.log("inside addDeveloper() , username=" + username + " , age=" + age + "," + language);
    this.submitted = true;

  }

}
