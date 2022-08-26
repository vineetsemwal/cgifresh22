import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

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

  username: string | undefined;
  age: number | undefined;
  language: string | undefined;
  submitted: boolean = false;


  constructor(builder: FormBuilder) {
    this.usernameCtrl = builder.control('', [Validators.required]);
    this.ageCtrl = builder.control('', [Validators.required]);
    this.languageCtrl = builder.control('', [Validators.required]);
    const mapObj = {
      username: this.usernameCtrl,
      age: this.ageCtrl,
      language: this.languageCtrl
    };
    this.myform = builder.group(mapObj)
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
    if(!formCtrl.touched && !formCtrl.dirty ){
      return false;
    }
    const flag =formCtrl.errors != null && formCtrl.errors['required'];
    return flag;

  }


  addDeveloper(): void {
    /*
      if(!this.myform.valid){
      return;
    }*/
    this.username = this.usernameCtrl.value;
    this.age = this.ageCtrl.value;
    this.language = this.languageCtrl.value;
    console.log("inside addDeveloper() , username=" + this.username + " , age=" + this.age + "," + this.language);
    this.submitted = true;
  }

}
