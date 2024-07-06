package com.example.springcursework.repository;

import com.example.springcursework.model.StudentGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentGroupRepository extends JpaRepository<StudentGroup, Integer> {

    List<StudentGroup> findByStudentId(int studentId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
