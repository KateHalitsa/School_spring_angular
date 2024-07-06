package com.example.springcursework.controller;

import com.example.springcursework.model.Subject;
import com.example.springcursework.servise.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "subject")
@CrossOrigin(origins = "http://localhost:4200")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public Subject registerSubject(@RequestBody Subject subjectVO) {
        return this.subjectService.insert(subjectVO);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<Subject> findAllSubject() {
        return this.subjectService.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Subject findById(@PathVariable int id) {
        return this.subjectService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Subject updateSubject(@PathVariable int id, @RequestBody Subject subjectVO) {
        return this.subjectService.updateSubject(id, subjectVO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteSubject(@PathVariable int id) {
        this.subjectService.delete(id);
    }

}
