package com.example.springcursework.servise;

import com.example.springcursework.model.Student;

import java.util.List;

public interface StudentService {
    public Student insert(Student studentVO);

    public List<Student> findAll();

    public void delete(int id);

    public Student findById(int id);

    public Student findByUserId(int userId);

    public Student updateStudent(int id, Student studentVO);
}
