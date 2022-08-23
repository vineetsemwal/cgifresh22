import { Component } from '@angular/core';
import {Developer} from './developer';

@Component(
  
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}

)

export class AppComponent {
  title = 'My first application';
  

  developers=[
    new Developer("imran",21), 
  new Developer("taran",22)];

}
