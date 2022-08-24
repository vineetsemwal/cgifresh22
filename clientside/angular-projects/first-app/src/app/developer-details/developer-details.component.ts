import { Component, OnInit } from '@angular/core';
import { Developer } from '../employee';

@Component({
  selector: 'dev-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent {

   dev:Developer=new Developer("aditi",23, "tester" ,"selenium");


}
