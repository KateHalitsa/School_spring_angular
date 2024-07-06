package com.example.springcursework.payload.request;

import com.example.springcursework.model.Student;
import com.example.springcursework.model.User;
import jakarta.validation.constraints.NotBlank;

public class RegisterStudentRequest {
    @NotBlank
    private User user;

    @NotBlank
    private Student student;

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Student getStudent() {
        return student;
    }
    public void setStudent(Student student) {
        this.student = student;
    }

}
