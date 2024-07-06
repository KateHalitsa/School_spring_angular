package com.example.springcursework.servise;

import com.example.springcursework.model.User;
import com.example.springcursework.payload.response.UserInfoResponse;

import java.util.List;

public interface UserService {
    public User insert(User userVO);

    public List<User> findAll();

    public void delete(int id);

    public User findById(int id);
    public User findByLogin(String username);

    public Integer findRelatedStudentId(int userId);

    public Integer findRelatedTeacherId(int userId);

    public UserInfoResponse getUserInfoResponse(User user);

    public User updateUser(int id, User userVO);
}
