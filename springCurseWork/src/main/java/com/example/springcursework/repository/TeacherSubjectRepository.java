package com.example.springcursework.repository;

import com.example.springcursework.model.StudentGroup;
import com.example.springcursework.model.TeacherSubject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeacherSubjectRepository extends JpaRepository<TeacherSubject, Integer> {

    List<TeacherSubject> findByTeacherId(int teacherId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
