package com.example.springcursework.payload.request;

import com.example.springcursework.model.Teacher;
import com.example.springcursework.model.User;
import jakarta.validation.constraints.NotBlank;

public class RegisterTeacherRequest {
    @NotBlank
    private User user;

    @NotBlank
    private Teacher teacher;

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Teacher getTeacher() {
        return teacher;
    }
    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

}
