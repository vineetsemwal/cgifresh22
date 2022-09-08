package com.cgitraining.demo.dao;

import com.cgitraining.demo.entity.Employee;

public interface IEmployeeDao {
    void add(Employee employee);

    Employee findEmployeeById(int id);
}
