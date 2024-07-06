package com.example.springcursework.repository;

import com.example.springcursework.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
    Optional<Teacher> findByUserId(int userId);

    /*
    @Query(value = "select * from teacher where user_id = ?1", nativeQuery = true)
    List<Teacher> findRelatedTeachers(int userId);     */
}
