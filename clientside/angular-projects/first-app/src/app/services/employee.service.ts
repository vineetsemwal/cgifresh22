import { Injectable } from '@angular/core';
import { Developer, Employee } from '../employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employeeStore: Employee[] = [
    new Developer("taran",21,"dev", "java")
  ];


  constructor() { }

  addEmployee(employee: Employee): void {
    console.log("****added employee in store ")
    this.employeeStore.push(employee);
  }

  fetchAllDevelopers(): Developer[] {
    const developers: Developer[] = [];
    for (const emp of this.employeeStore) {
      if (emp.type == "dev") {
        const dev: Developer = emp as Developer;
        developers.push(dev);
      }
    }
    return developers;

  }

  findDeveloperByUsername(username: string): Developer|null {
    for (const emp of this.employeeStore) {
      if (emp.type == "dev" && emp.username == username) {
        const dev: Developer = emp as Developer;
        return dev;
      }
    }
    return null;

  }

}
