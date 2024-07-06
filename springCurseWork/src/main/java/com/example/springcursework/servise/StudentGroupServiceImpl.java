package com.example.springcursework.servise;

import com.example.springcursework.model.StudentGroup;
import com.example.springcursework.repository.StudentGroupRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class StudentGroupServiceImpl implements StudentGroupService {
    @Autowired
    private StudentGroupRepository studentGroupRepository;

    @Override
    public StudentGroup insert(StudentGroup studentGroupVO) {
        return this.studentGroupRepository.save(studentGroupVO);
    }

    @Override
    public List<StudentGroup> findAll() {
        return this.studentGroupRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.studentGroupRepository.deleteById(id);
    }

    @Override
    public StudentGroup findById(int id) {
        return this.studentGroupRepository.findById(id).get();
    }

    @Override
    public StudentGroup updateStudentGroup(int id, StudentGroup studentGroupVO) {
        studentGroupVO.setId(id);
        return this.studentGroupRepository.save(studentGroupVO);
    }
    @Override
    public List<StudentGroup> findStudentGroupListForStudent(int studentId){
        return this.studentGroupRepository.findByStudentId(studentId);
    }
}
