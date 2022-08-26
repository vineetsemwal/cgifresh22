import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-developer-template',
  templateUrl: './add-developer-template.component.html',
  styleUrls: ['./add-developer-template.component.css']
})
export class AddDeveloperTemplateComponent  {

  username:string|undefined;
  age:number|undefined;
  language:string|undefined;
  submitted:boolean=false;

  addDeveloper(myform:any):void{
    console.log("*****inside addDeveloper", myform);
    /*
    const formData =myform.value;
    this.username=formData.username;
    this.age=formData.age;
    this.language=formData.language;
    */
    this.submitted=true;


  }
}
