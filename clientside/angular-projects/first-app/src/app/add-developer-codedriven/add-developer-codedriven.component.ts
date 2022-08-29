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
    this.usernameCtrl = builder.control('',
     [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
    this.ageCtrl = builder.control('',
    [Validators.required, Validators.min(18),Validators.max(60)]);
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

  isUsernameLengthNotBetween(){
    const formCtrl=this.usernameCtrl;
    if(!formCtrl.touched && !formCtrl.dirty ){
      return false;
    }
    const flag=formCtrl.errors!=null && (formCtrl.errors['minlength'] || formCtrl.errors['maxlength'])
    return flag;
  }

  isAgeNotBetween(){
    const formCtrl=this.ageCtrl;
    if(!formCtrl.touched && !formCtrl.dirty ){
      return false;
    }
    const flag =formCtrl.errors != null && (formCtrl.errors['min'] || formCtrl.errors['max']  );
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
