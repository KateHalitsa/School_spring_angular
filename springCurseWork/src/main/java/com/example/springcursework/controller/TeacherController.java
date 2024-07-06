package com.example.springcursework.controller;

import com.example.springcursework.model.Teacher;
import com.example.springcursework.servise.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "teacher")
@CrossOrigin(origins = "http://localhost:4200")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public Teacher registerTeacher(@RequestBody Teacher teacherVO) {
        return this.teacherService.insert(teacherVO);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<Teacher> findAllTeachers() {
        return this.teacherService.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Teacher findById(@PathVariable int id) {
        return this.teacherService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Teacher updateTeacher(@PathVariable int id, @RequestBody Teacher teacherVO) {
        return this.teacherService.updateTeacher(id, teacherVO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteTeacher(@PathVariable int id) {
        this.teacherService.delete(id);
    }
}
