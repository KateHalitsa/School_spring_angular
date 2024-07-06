package com.example.springcursework.servise;

import com.example.springcursework.model.Subject;


import java.util.List;

public interface SubjectService {
    public Subject insert(Subject subjectVO);

    public List<Subject> findAll();

    public void delete(int id);

    public Subject findById(int id);

    public Subject updateSubject(int id, Subject subjectVO);

}
