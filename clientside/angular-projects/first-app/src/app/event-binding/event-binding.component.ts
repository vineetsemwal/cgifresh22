import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  counter:number=0;

  incrementCounter(){
    this.counter++;
    console.log("new counter="+this.counter);
  }

  description:string="";

changeDescription(value:string){
this.description=value;
console.log("inside method description, value="+value);
}

}
