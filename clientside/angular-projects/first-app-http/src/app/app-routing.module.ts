import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeveloperCodedrivenComponent } from './add-developer-codedriven/add-developer-codedriven.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { ListDevelopersComponent } from './list-developers/list-developers.component';



const routes: Routes = [

  { path: "add-dev-codedriven", component: AddDeveloperCodedrivenComponent },

  { path: "list-devs", component: ListDevelopersComponent },

  { path: "find-dev", component: DeveloperDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
