import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-experiments',
  templateUrl: './pipe-experiments.component.html',
  styleUrls: ['./pipe-experiments.component.css'],
})
export class PipeExperimentsComponent {
  text: string = 'hi';

  dateVal = new Date();

  user = {
    name: 'deepika',
    age: 22,
  };

  phoneNumber = '1234567890';

  numbersArray=[20,51,5,2,16];


}
