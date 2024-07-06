package com.example.springcursework.servise;

import com.example.springcursework.model.TeacherSubject;

import java.util.List;

public interface TeacherSubjectService {
    public TeacherSubject insert(TeacherSubject teacherSubjectVO);
    public List<TeacherSubject> findAll();
    public void delete(int id);
    public TeacherSubject findById(int id);
    public TeacherSubject updateTeacherSubject(int id, TeacherSubject teacherSubjectVO);
    public List<TeacherSubject> findTeacherSubjectListForTeacher(int teacherId);
}
