import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'structural-demo',
  templateUrl: './strctural-demo.component.html',
  styleUrls: ['./strctural-demo.component.css']
})
export class StructuralDemoComponent  {

age:number=80;
devs:Developer[]=[

  new Developer("taran",21, "java"),
  new Developer("deepak",22,"c#"),
  new Developer("pedireddy",23, "python"),


]


isEligible():boolean{
const flag=this.age>=18 && this.age<=60;
return flag;
}

}
