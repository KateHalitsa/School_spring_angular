package com.example.springcursework.payload.response;

import java.util.List;

public class UserInfoResponse {
    private int id;
    private String username;
    private String email;
    private List<String> roles;
    private Integer teacherId;
    private Integer studentId;

    public UserInfoResponse(int id, String username, String email, List<String> roles, Integer teacherId, Integer studentId) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.teacherId = teacherId;
        this.studentId = studentId;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {  this.id = id; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public Integer getTeacherId() {
        return teacherId;
    }
    public Integer getStudentId() {
        return studentId;
    }
}

