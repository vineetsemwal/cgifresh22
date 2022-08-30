import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent  {

  info="Property binding experiment";
  linkSource="http://google.com";

  flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_India.svg/255px-Flag_India.svg.png";


  booleanVal:boolean=false;

}
