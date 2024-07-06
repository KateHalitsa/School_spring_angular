package com.example.springcursework.servise;

import com.example.springcursework.model.Student;
import com.example.springcursework.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student insert(Student studentVO) {
        return this.studentRepository.save(studentVO);
    }

    @Override
    public List<Student> findAll() {

        return this.studentRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.studentRepository.deleteById(id);
    }

    @Override
    public Student findById(int id) {
        return this.studentRepository.findById(id).get();
    }

    @Override
    public Student findByUserId(int userId){
        return this.studentRepository.findByUserId(userId).orElseGet(() -> {return null;});
    }

    @Override
    public Student updateStudent(int id, Student studentVO) {
        studentVO.setId(id);
        return this.studentRepository.save(studentVO);
    }
}
