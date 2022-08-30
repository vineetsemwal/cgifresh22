import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {

  constructor() {
    console.log("inside child1 constructor");

  }

  ngOnInit(): void {
    console.log("inside child1 ngOninit");
  }

  ngOnDestroy(): void {
    console.log("inside child1 ngOnDestroy")
  }
}
