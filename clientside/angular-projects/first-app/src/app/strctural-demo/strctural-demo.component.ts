import { Component, OnInit } from '@angular/core';
import { Developer } from '../employee';

@Component({
  selector: 'structural-demo',
  templateUrl: './strctural-demo.component.html',
  styleUrls: ['./strctural-demo.component.css']
})
export class StructuralDemoComponent  {

age:number=80;
devs:Developer[]=[

  new Developer("taran",21,"dev", "java"),
  new Developer("deepak",22,"dev", "c#"),
  new Developer("pedireddy",23,"dev", "python"),


]


isEligible():boolean{
const flag=this.age>=18 && this.age<=60;
return flag;
}

}
