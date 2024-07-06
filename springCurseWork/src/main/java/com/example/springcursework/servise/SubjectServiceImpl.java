package com.example.springcursework.servise;

import com.example.springcursework.model.Subject;

import com.example.springcursework.repository.SubjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;


    @Override
    public Subject insert(Subject subjectVO) {
        return this.subjectRepository.save(subjectVO);
    }

    @Override
    public List<Subject> findAll() {
        return this.subjectRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.subjectRepository.deleteById(id);
    }

    @Override
    public Subject findById(int id) {
        return this.subjectRepository.findById(id).get();
    }

    @Override
    public Subject updateSubject(int id, Subject subjectVO) {
        subjectVO.setId(id);
        return this.subjectRepository.save(subjectVO);
    }


}
