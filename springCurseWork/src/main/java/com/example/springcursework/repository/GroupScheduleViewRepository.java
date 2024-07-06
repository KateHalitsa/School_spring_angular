package com.example.springcursework.repository;

import com.example.springcursework.model.GroupScheduleView;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupScheduleViewRepository extends JpaRepository<GroupScheduleView, Integer> {

    List<GroupScheduleView> findByTeacherId(int teacherId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
