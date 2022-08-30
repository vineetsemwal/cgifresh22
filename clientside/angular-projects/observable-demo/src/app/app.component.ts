import { Component, OnInit } from '@angular/core';
import { observable, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable-demo';



  ngOnInit() {
    const observer={
           next: (result:number)=>{
             console.log("add result available="+result);
           },
           error: (error:string)=>{
            console.log("error is available"+error);
           }

    };

    let observable:Observable<number> = this.add(10,1);
    console.log("add operation assigned for execution");
    observable.subscribe( observer );
    console.log("after subscribe");
  }


  add(num1: number, num2: number):Observable<number> {
    let observable: Observable<number> = new Observable<number>(
      subsriber => {
        if(num1<0 ||num2<0){
          const err="num1 or num2 is negative";
          subsriber.error(err);
        }
        const result = num1 + num2;
        subsriber.next(result);

 }
    );
    return observable;

  }



}


