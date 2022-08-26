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

  isUsernameNotValid(usernameCtrl: any): boolean {
    const flag =
      (usernameCtrl.touched || usernameCtrl.dirty) &&
      usernameCtrl.errors != null &&
      usernameCtrl.errors['required'];
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
