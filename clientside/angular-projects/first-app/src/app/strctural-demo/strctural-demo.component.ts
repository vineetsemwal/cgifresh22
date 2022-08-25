import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural-demo',
  templateUrl: './strctural-demo.component.html',
  styleUrls: ['./strctural-demo.component.css']
})
export class StructuralDemoComponent  {

age:number=80;

isEligible():boolean{
const flag=this.age>=18 && this.age<=60;
return flag;
}

}
