import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { TesterDetailsComponent } from './tester-details/tester-details.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule(
  {
    declarations: [
      AppComponent,
      DeveloperDetailsComponent,
      TesterDetailsComponent,
      PropertyBindingComponent,
      EventBindingComponent
    ],

    imports: [
      BrowserModule,
      FormsModule
    ],

    providers: [],

    bootstrap: [AppComponent]
  }
)
export class AppModule { }
