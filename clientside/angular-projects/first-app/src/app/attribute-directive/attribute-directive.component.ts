import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent  {

  age:number=21;

  isAgeEven():boolean{
   return this.age%2===0;
  }

}
