package com.cgitraining.demo.service;

import com.cgitraining.demo.dao.EmployeeDaoImpl;
import com.cgitraining.demo.dao.IEmployeeDao;
import com.cgitraining.demo.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeServiceImpl implements  IEmployeeService{

    @Autowired
    private IEmployeeDao dao;

    private int generatedId;

    int generateId(){
        return ++generatedId;
    }


    @Override
    public Employee register(String name, int age) {
        Employee employee=new Employee();
        int newId=generateId();
        employee.setId(newId);
        employee.setAge(age);
        employee.setName(name);
        dao.add(employee);
        return employee;
    }

    @Override
    public Employee findById(int id) {
        Employee employee=dao.findEmployeeById(id);
        return employee;
    }
}
