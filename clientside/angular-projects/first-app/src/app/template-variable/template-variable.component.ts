import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent {

  description:string="";

  changeDescription(newDesc: string):void{
   this.description=newDesc;
  }


}
