import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private route:ActivatedRoute;

  id:number|undefined;


  constructor(route:ActivatedRoute) {
  this.route=route;
   }

  ngOnInit(): void {
   const paramMapObs:Observable<ParamMap>= this.route.paramMap;
   const observer={
    next: (result:ParamMap)=>{
    const idStr:string|null=result.get("id");
    if(idStr!=null){
      this.id=Number(idStr);
    }
    }

  }
   paramMapObs.subscribe(observer);
  }

}
