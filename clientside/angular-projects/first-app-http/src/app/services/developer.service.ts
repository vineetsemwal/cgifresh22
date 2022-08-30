import { Injectable } from '@angular/core';
import { Developer } from '../developer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../common/constants';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private client:HttpClient;
  constructor(  client:HttpClient) {
   this.client=client;
  }

  addEmployee(employee:Developer): Observable<Developer>{
   const url=baseUrl+"/developers";
    const observable:Observable<Developer>=this.client.post<Developer>(url,employee);
    return observable;
  }



  fetchAllDevelopers(): Observable<Developer[]> {
   const url=baseUrl+"/developers";
   const observable:Observable<Developer[]>=this.client.get<Developer[]>(url);
   return observable;
  }


  findDeveloperById(id: number): Observable<Developer> {
    const url= baseUrl+"/developers/"+id;
    console.log("**inside findDeveloperById(), constructed url="+url);
    const observable:Observable<Developer>=this.client.get<Developer>(url);
   return observable;
  }
}
