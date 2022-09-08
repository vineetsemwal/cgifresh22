package com.cgitraining.demo.dao;

import com.cgitraining.demo.entity.Employee;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
@Component
public class EmployeeDaoImpl implements IEmployeeDao {
    private Map<Integer, Employee> store = new HashMap<>();

    @Override
    public void add(Employee employee) {
        store.put(employee.getId(), employee);
    }

    @Override
    public Employee findEmployeeById(int id) {
        Employee employee = store.get(id);
        return employee;
    }
}
