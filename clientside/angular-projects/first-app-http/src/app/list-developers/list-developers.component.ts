import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Developer } from '../developer';
import { EmployeeService } from '../services/developer.service';

@Component({
  selector: 'list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.css']
})
export class ListDevelopersComponent {

  devs: Developer[] | undefined;
  errMsg: string | undefined;


  constructor(service: EmployeeService) {
    this.devs=undefined;
    this.errMsg=undefined;
    console.log("inside ctr of  ListDevelopersComponent");
    const observer = {
      next: (result: Developer[]) => {
        this.devs = result;
        console.log("**result consumed in list Developers component ");
      },
      error: (err: Error) => {
        this.errMsg = err.message;
        console.log("**error consumed in list Developers component "+err.message);
      }
    }
    const observable: Observable<Developer[]> = service.fetchAllDevelopers();
    observable.subscribe(observer);

  }


}
