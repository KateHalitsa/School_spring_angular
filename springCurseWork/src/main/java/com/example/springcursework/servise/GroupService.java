package com.example.springcursework.servise;

import com.example.springcursework.model.Group;
import com.example.springcursework.model.GroupGeneralView;

import java.util.List;

public interface GroupService {
    public Group insert(Group groupVO);

    public List<Group> findAll();

    public void delete(int id);

    public Group findById(int id);

    public Group updateGroup(int id, Group groupVO);

    public List<GroupGeneralView> generalView();
}
