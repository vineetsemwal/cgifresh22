import { Component, OnInit } from '@angular/core';
import { Developer } from '../employee';

@Component({
  selector: 'dev-details',
  templateUrl: './dev-details.component.html',
  styleUrls: ['./dev-details.component.css']
})
export class DevDetailsComponent  {


  developer=new Developer("vinitha", 22,"dev","java");



}
