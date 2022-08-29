import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { TesterDetailsComponent } from './tester-details/tester-details.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDemoComponent } from './strctural-demo/strctural-demo.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { PipeExperimentsComponent } from './pipe-experiments/pipe-experiments.component';
import { LengthPipe } from './common/length.pipe';
import { SmallestPipe } from './common/smallest.pipe';
import { SubstringPipe } from './common/substring.pipe';
import { AddDeveloperTemplateComponent } from './add-developer-template/add-developer-template.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { AddDeveloperCodedrivenComponent } from './add-developer-codedriven/add-developer-codedriven.component';
import { ListDevelopersComponent } from './list-developers/list-developers.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule(
  {
    declarations: [
      AppComponent,
      DeveloperDetailsComponent,
      TesterDetailsComponent,
      PropertyBindingComponent,
      EventBindingComponent,
      StructuralDemoComponent,
      AttributeDirectiveComponent,
      PipeExperimentsComponent,
      LengthPipe,
      SmallestPipe,
      SubstringPipe,
      AddDeveloperTemplateComponent,
      TemplateVariableComponent,
      AddDeveloperCodedrivenComponent,
      ListDevelopersComponent
    ],

    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
    ],

    providers: [],

    bootstrap: [AppComponent]
  }
)
export class AppModule { }
