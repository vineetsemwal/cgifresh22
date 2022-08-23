import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevDetailsComponent } from './dev-details/dev-details.component';
import { TesterDetailsComponent } from './tester-details/tester-details.component';

@NgModule(
  {
  declarations: [
    AppComponent,
    DevDetailsComponent,
    TesterDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]
}
)
export class AppModule { }
