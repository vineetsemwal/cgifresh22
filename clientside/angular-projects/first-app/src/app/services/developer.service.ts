import { Injectable } from '@angular/core';
import { Developer } from '../developer';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employeeStore: Developer[] = [
    new Developer("taran",21, "java")
  ];


  constructor() { }

  addEmployee(employee: Developer): void {
    console.log("****added employee in store ")
    this.employeeStore.push(employee);
  }

  fetchAllDevelopers(): Developer[] {

    return this.employeeStore;

  }

  findDeveloperByUsername(username: string): Developer|null {
    for (const emp of this.employeeStore) {
      if ( emp.username == username) {

        return emp;
      }
    }
    return null;

  }

}
