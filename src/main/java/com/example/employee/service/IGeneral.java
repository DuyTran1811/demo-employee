package com.example.employee.service;

import com.example.employee.model.Employee;

public interface IGeneral<T> {
    Iterable<T> findAll();

    T findById(long id);

    T update(T t);

    void delete(long id);

    T addEmployee(T t);
}
