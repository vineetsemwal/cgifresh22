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

  backgroundColorStyle="green";
  color="white";
  fontSize="large";

  demo2Style={
     "background-color":"green",
     "color" : "white",
     "font-size": "large"
  };

  provideStyle(){
  return this.demo2Style;
  }

}
