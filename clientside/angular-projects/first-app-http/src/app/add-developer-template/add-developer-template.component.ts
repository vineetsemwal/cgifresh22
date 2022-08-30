import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-developer-template',
  templateUrl: './add-developer-template.component.html',
  styleUrls: ['./add-developer-template.component.css'],
})
export class AddDeveloperTemplateComponent {
  username: string | undefined;
  age: number | undefined;
  language: string | undefined;
  submitted: boolean = false;


  isAgeRequiredNotValid(ageCtrl:any): boolean {
    const flag: boolean = this.isFieldRequiredNotValid(ageCtrl);
    return flag;
  }

  isUsernameRequiredNotValid(nameCtrl:any): boolean {
    const flag = this.isFieldRequiredNotValid(nameCtrl);
    return flag;
  }

  isFieldRequiredNotValid(formCtrl: FormControl) {
    if(!formCtrl.touched && !formCtrl.dirty ){
      return false;
    }
    const flag =formCtrl.errors != null && formCtrl.errors['required'];
    return flag;

  }

  addDeveloper(myform: any): void {
    if (!myform.valid) {
      return;
    }
    console.log('*****inside addDeveloper', myform);
    /*
    const formData =myform.value;
    this.username=formData.username;
    this.age=formData.age;
    this.language=formData.language;
    */
    this.submitted = true;
  }
}
