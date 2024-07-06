package com.example.springcursework.repository;

import com.example.springcursework.model.GroupGeneralView;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupGeneralViewRepository extends JpaRepository<GroupGeneralView, Integer> {

    //Optional<Student> findByUserId(int userId);

    /*
    @Query(value = "select * from student where user_id = ?1", nativeQuery = true)
    List<Student> findRelatedStudents(int userId);
    * */
}
