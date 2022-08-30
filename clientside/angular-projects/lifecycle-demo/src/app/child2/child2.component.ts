import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {

  constructor() {
    console.log("inside child2 constructor");

  }

  ngOnInit(): void {
    console.log("inside child2 ngOninit");
  }


  ngOnDestroy(): void {
    console.log("inside child2 ngOnDestroy")
  }
}
