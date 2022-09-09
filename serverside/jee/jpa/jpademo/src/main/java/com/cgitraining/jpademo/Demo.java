package com.cgitraining.jpademo;

import javax.persistence.*;

public class Demo {

    private EntityManager em;

    public static void main(String args[]) {
        Demo demo = new Demo();
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("empms");
        demo.em = emf.createEntityManager();
        Employee employee1 = demo.register("himanshu", 22);
        Employee employee2 = demo.register("kiran", 23);

        long id = employee2.getId();
        System.out.println("***inserted 2 empployees");
        demo.display(employee1);
        demo.display(employee2);

        Employee found = demo.findById(id);
        System.out.println("***fetched employee object with id=" + id);
        demo.display(found);
        Employee updated = demo.updateName(id, "kiran kv");
        System.out.println("***updated employee with id=" + id);
        demo.display(updated);
        demo.em.close();
        emf.close();
    }

    Employee findById(long id) {
        Employee emp = em.find(Employee.class, id);
        return emp;
    }

    Employee register(String name, int age) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        Employee employee1 = new Employee(name, age);
        em.persist(employee1);
        transaction.commit();
        return employee1;
    }

    Employee updateName(long id, String newName) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        Employee employee = findById(id);
        employee.setName(newName);
        em.merge(employee);
        transaction.commit();
        return employee;
    }

    void display(Employee employee) {
        System.out.println("employee-" + employee.getId() + " -" + employee.getName() + "-" + employee.getAge());
    }
}
