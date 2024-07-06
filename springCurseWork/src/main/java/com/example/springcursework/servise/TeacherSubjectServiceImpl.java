package com.example.springcursework.servise;

import com.example.springcursework.model.TeacherSubject;
import com.example.springcursework.repository.TeacherSubjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TeacherSubjectServiceImpl implements TeacherSubjectService {
    @Autowired
    private TeacherSubjectRepository teacherSubjectRepository;

    @Override
    public TeacherSubject insert(TeacherSubject teacherSubjectVO) {
        return this.teacherSubjectRepository.save(teacherSubjectVO);
    }

    @Override
    public List<TeacherSubject> findAll() {
        return this.teacherSubjectRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.teacherSubjectRepository.deleteById(id);
    }

    @Override
    public TeacherSubject findById(int id) {
        return this.teacherSubjectRepository.findById(id).get();
    }

    @Override
    public TeacherSubject updateTeacherSubject(int id, TeacherSubject teacherSubjectVO) {
        teacherSubjectVO.setId(id);
        return this.teacherSubjectRepository.save(teacherSubjectVO);
    }
    @Override
    public List<TeacherSubject> findTeacherSubjectListForTeacher(int teacherId){
        return this.teacherSubjectRepository.findByTeacherId(teacherId);
    }
}
