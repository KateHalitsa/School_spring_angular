package com.example.springcursework.repository;

import com.example.springcursework.model.Student;
import com.example.springcursework.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

}
