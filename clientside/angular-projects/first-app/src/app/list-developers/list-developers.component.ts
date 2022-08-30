import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { EmployeeService } from '../services/developer.service';

@Component({
  selector: 'list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.css']
})
export class ListDevelopersComponent  {

 devs:Developer[];



  constructor(service:EmployeeService) {
    console.log("inside ctr of  ListDevelopersComponent");
  this.devs=service.fetchAllDevelopers();

   }


}
