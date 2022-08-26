import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-developer-codedriven',
  templateUrl: './add-developer-codedriven.component.html',
  styleUrls: ['./add-developer-codedriven.component.css']
})
export class AddDeveloperCodedrivenComponent {

  usernameCtrl: FormControl;
  ageCtrl: FormControl;
  languageCtrl: FormControl;
  myform:FormGroup;

  username:string|undefined;
  age:number|undefined;
  language:string|undefined;
  submitted:boolean=false;


  constructor(builder: FormBuilder) {
    this.usernameCtrl = builder.control('');
    this.ageCtrl = builder.control('');
    this.languageCtrl = builder.control('');
    const mapObj={
      username:this.usernameCtrl,
      age:this.ageCtrl,
      language:this.languageCtrl
      };
    this.myform=builder.group(mapObj)
  }

addDeveloper():void{
/*
  if(!this.myform.valid){
  return;
}*/
this.username=this.usernameCtrl.value;
this.age=this.ageCtrl.value;
this.language=this.languageCtrl.value;
console.log("inside addDeveloper() , username="+this.username+" , age="+this.age+","+this.language);
this.submitted=true;
}

}
