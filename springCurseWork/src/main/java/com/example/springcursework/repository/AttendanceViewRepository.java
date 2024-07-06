package com.example.springcursework.repository;

import com.example.springcursework.model.AttendanceView;
import com.example.springcursework.model.AttendanceViewKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AttendanceViewRepository extends CrudRepository<AttendanceView, AttendanceViewKey> {

    List<AttendanceView> findByGroupScheduleId(int groupScheduleId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
