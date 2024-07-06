package com.example.springcursework.servise;

import com.example.springcursework.model.StudentGroup;
import java.util.List;

public interface StudentGroupService {
    public StudentGroup insert(StudentGroup groupScheduleVO);
    public List<StudentGroup> findAll();
    public void delete(int id);
    public StudentGroup findById(int id);
    public StudentGroup updateStudentGroup(int id, StudentGroup groupScheduleVO);
    public List<StudentGroup> findStudentGroupListForStudent(int studentId);
}
