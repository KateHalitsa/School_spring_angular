package com.example.springcursework.controller;

import com.example.springcursework.model.Student;
import com.example.springcursework.model.Teacher;
import com.example.springcursework.model.User;
import com.example.springcursework.payload.request.RegisterStudentRequest;
import com.example.springcursework.payload.request.RegisterTeacherRequest;
import com.example.springcursework.payload.response.UserInfoResponse;
import com.example.springcursework.servise.StudentService;
import com.example.springcursework.servise.TeacherService;
import com.example.springcursework.servise.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private TeacherService teacherService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public User registerUser(@RequestBody User userVO) {
        return this.userService.insert(userVO);
    }

    @PostMapping(value="/registerStudent")
    @ResponseStatus(value = HttpStatus.CREATED)
    public UserInfoResponse registerStudent(@RequestBody RegisterStudentRequest userAndStudent)
    {
        User user = userAndStudent.getUser();
        User userUpdated = this.userService.insert(user);

        Student student = userAndStudent.getStudent();
        student.setUserId(userUpdated.getId());
        this.studentService.insert(student);

        return this.userService.getUserInfoResponse(user);
    }

    @PostMapping(value="/registerTeacher")
    @ResponseStatus(value = HttpStatus.CREATED)
    public UserInfoResponse registerTeacher(@RequestBody RegisterTeacherRequest userAndTeacher)
    {
        User user = userAndTeacher.getUser();
        User userUpdated = this.userService.insert(user);

        Teacher teacher = userAndTeacher.getTeacher();
        teacher.setUserId(userUpdated.getId());
        this.teacherService.insert(teacher);

        return this.userService.getUserInfoResponse(user);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<User> findAllUsers() {
        return this.userService.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public User findById(@PathVariable int id) {
        return this.userService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public User updateUser(@PathVariable int id, @RequestBody User userVO) {
        return this.userService.updateUser(id, userVO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable int id) {
        this.userService.delete(id);
    }
}
