package com.example.springcursework.servise;


import com.example.springcursework.model.Teacher;
import com.example.springcursework.repository.TeacherRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TeacherServiceImpl implements TeacherService{
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Teacher insert(Teacher userVO) {
        return this.teacherRepository.save(userVO);
    }

    @Override
    public List<Teacher> findAll() {
        return this.teacherRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.teacherRepository.deleteById(id);
    }

    @Override
    public Teacher findById(int id) {
        return this.teacherRepository.findById(id).get();
    }
    @Override
    public Teacher findByUserId(int userId){
        return this.teacherRepository.findByUserId(userId).orElseGet(() -> {return null;});
    }

    @Override
    public Teacher updateTeacher(int id, Teacher teacherVO) {
        teacherVO.setId(id);
        return this.teacherRepository.save(teacherVO);
    }
}
