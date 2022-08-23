import { Component, OnInit } from '@angular/core';
import { Tester } from '../employee';

@Component({
  selector: 'tester-details',
  templateUrl: './tester-details.component.html',
  styleUrls: ['./tester-details.component.css']
})
export class TesterDetailsComponent {

  tester=new Tester("aditi",21,"tester","selenium");

}
