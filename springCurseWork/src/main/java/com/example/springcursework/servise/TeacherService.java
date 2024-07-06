package com.example.springcursework.servise;

import com.example.springcursework.model.Teacher;

import java.util.List;

public interface TeacherService {
    public Teacher insert(Teacher teacherVO);

    public List<Teacher> findAll();

    public void delete(int id);

    public Teacher findById(int id);

    public Teacher findByUserId(int userId);

    public Teacher updateTeacher(int id, Teacher teacherVO);
}
