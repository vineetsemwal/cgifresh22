package com.cgitraining.demo.service;

import com.cgitraining.demo.entity.Employee;

public interface IEmployeeService {

    Employee register(String name, int age);

    Employee findById(int id);

}
