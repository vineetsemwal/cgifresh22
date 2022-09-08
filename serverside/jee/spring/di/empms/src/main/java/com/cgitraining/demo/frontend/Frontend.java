package com.cgitraining.demo.frontend;

import com.cgitraining.demo.entity.Employee;
import com.cgitraining.demo.service.EmployeeServiceImpl;
import com.cgitraining.demo.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Frontend {
    @Autowired
    private IEmployeeService service;

    public void runUI(){
        System.out.println("**registering employees");
       Employee emp1= service.register("sagar",21);
       display(emp1);
       Employee emp2=service.register("himanshu",22);
       display(emp2);
       int empId=emp2.getId();
        System.out.println("fetched employee by id="+empId);
       Employee found=service.findById(empId);
       display(found);
    }

    void display(Employee employee){
        System.out.println("employee-"+employee.getId()+"-"+employee.getName()+"-"+employee.getAge());
    }


}
