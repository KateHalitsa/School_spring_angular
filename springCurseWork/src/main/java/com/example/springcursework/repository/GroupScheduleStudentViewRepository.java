package com.example.springcursework.repository;

import com.example.springcursework.model.GroupScheduleStudentView;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupScheduleStudentViewRepository extends JpaRepository<GroupScheduleStudentView, Integer> {

    List<GroupScheduleStudentView> findByStudentId(int studentId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
