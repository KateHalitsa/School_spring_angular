package com.example.springcursework.repository;

import com.example.springcursework.model.GroupSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupScheduleRepository extends JpaRepository<GroupSchedule, Integer> {

    List<GroupSchedule> findByGroupId(int groupId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
