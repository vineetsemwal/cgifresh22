import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Developer } from '../developer';
import { EmployeeService } from '../services/developer.service';

@Component({
  selector: 'app-developer-details-routeid',
  templateUrl: './developer-details-routeid.component.html',
  styleUrls: ['./developer-details-routeid.component.css']
})
export class DeveloperDetailsRouteidComponent implements OnInit {

  dev: Developer | undefined;
  errMsg: string | undefined;

  private service: EmployeeService;

  private route: ActivatedRoute;

  constructor(service: EmployeeService, activeRoute: ActivatedRoute) {
    this.route = activeRoute;
    this.service = service;
  }

  ngOnInit(): void {
  const observer={
    next: (result:ParamMap)=>{
     const idStr:string|null =result.get("id");
     const id:number=Number(idStr);
     this.findDevById(id);
    }
  }
  const paramMapObs:Observable<ParamMap>= this.route.paramMap;
  paramMapObs.subscribe(observer);
  }


  findDevById(id: number): void {

    this.dev = undefined;
    this.errMsg = undefined;

    const observer = {
      next: (result: Developer) => {
        this.dev = result;
        console.log("***result consumed");
      },

      error: (error: Error) => {
        this.errMsg = error.message;
        console.log("*** error consumed " + this.errMsg);
      }

    }

    const observable: Observable<Developer> = this.service.findDeveloperById(id);
    observable.subscribe(observer);

  }
}
